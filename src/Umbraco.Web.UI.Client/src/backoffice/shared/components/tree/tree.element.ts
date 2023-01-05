import { html } from 'lit';
import { when } from 'lit-html/directives/when.js';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'rxjs';
import { UmbTreeContextBase } from './tree.context';
import type { ManifestTree } from '@umbraco-cms/models';
import { umbExtensionsRegistry } from '@umbraco-cms/extensions-registry';
import { UmbDataStore } from '@umbraco-cms/stores/store';
import { UmbLitElement } from '@umbraco-cms/element';
import { UmbContextProviderController } from 'src/core/context-api/provide/context-provider.controller';

@customElement('umb-tree')
export class UmbTreeElement extends UmbLitElement {
	private _alias = '';
	@property({ type: String, reflect: true })
	get alias() {
		return this._alias;
	}
	set alias(newVal) {
		const oldVal = this._alias;
		this._alias = newVal;
		this.requestUpdate('alias', oldVal);
		this._observeTree();
	}

	private _selectable = false;
	@property({ type: Boolean, reflect: true })
	get selectable() {
		return this._selectable;
	}
	set selectable(newVal) {
		const oldVal = this._selectable;
		this._selectable = newVal;
		this.requestUpdate('selectable', oldVal);
		this._treeContext?.setSelectable(newVal);

		if (newVal) {
			this._observeSelection();
		}
	}

	private _selection: Array<string> = [];
	@property({ type: Array })
	get selection() {
		return this._selection;
	}
	set selection(newVal: Array<string>) {
		const oldVal = this._selection;
		this._selection = newVal;
		this.requestUpdate('selection', oldVal);
		this._treeContext?.setSelection(newVal);
	}

	@state()
	private _tree?: ManifestTree;

	private _treeContext?: UmbTreeContextBase;
	private _treeContextProvider?: UmbContextProviderController;

	connectedCallback(): void {
		super.connectedCallback();
		this._observeTree();
	}

	private _observeTree() {
		if (!this.alias) return;

		this.observe(
			umbExtensionsRegistry
				.extensionsOfType('tree')
				.pipe(map((trees) => trees.find((tree) => tree.alias === this.alias))),
			(tree => {
				this._tree = tree;
				if(tree) {
					this._provideTreeContext();
					this._provideStore();
				}
			}
		));
	}

	private _provideTreeContext() {
		if (!this._tree || this._treeContext) return;

		// TODO: if a new tree comes around, which is different, then we should clean up and re provide.

		this._treeContext = new UmbTreeContextBase(this._tree);
		this._treeContext.setSelectable(this.selectable);
		this._treeContext.setSelection(this.selection);
		
		this.provideContext('umbTreeContext', this._treeContext);
	}

	private _provideStore() {
		// TODO: Clean up store, if already existing.

		if (!this._tree?.meta.storeContextAlias) return;

		this.consumeContext(this._tree.meta.storeContextAlias, (store: UmbDataStore<unknown>) =>
			this.provideContext('umbStore', store)
		);
	}

	private _observeSelection() {
		if (!this._treeContext) return;

		this.observe(this._treeContext.selection, (selection) => {
			if (this._selection === selection) return;
			this._selection = selection;
			this.dispatchEvent(new CustomEvent('selected'));
		});
	}

	render() {
		return html`${when(this._tree, () => html`<umb-tree-extension .tree=${this._tree}></umb-tree-extension>`)}`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		'umb-tree': UmbTreeElement;
	}
}
