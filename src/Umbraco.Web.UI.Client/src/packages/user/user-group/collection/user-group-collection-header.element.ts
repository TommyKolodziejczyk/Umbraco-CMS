import type { UmbUserGroupCollectionContext } from './user-group-collection.context.js';
import { css, customElement, html } from '@umbraco-cms/backoffice/external/lit';
import { UmbLitElement } from '@umbraco-cms/backoffice/lit-element';
import { UMB_COLLECTION_CONTEXT } from '@umbraco-cms/backoffice/collection';
import { debounce } from '@umbraco-cms/backoffice/utils';

const elementName = 'umb-user-group-collection-header';
@customElement(elementName)
export class UmbUserGroupCollectionHeaderElement extends UmbLitElement {
	#collectionContext: UmbUserGroupCollectionContext | undefined;

	constructor() {
		super();

		this.consumeContext(UMB_COLLECTION_CONTEXT, (instance) => {
			this.#collectionContext = instance as UmbUserGroupCollectionContext;
		});
	}

	#onSearch(event: InputEvent) {
		const target = event.target as HTMLInputElement;
		const query = target.value || '';
		console.log(this.#collectionContext);
		this.#debouncedSearch(query);
	}

	#debouncedSearch = debounce((query: any) => this.#collectionContext?.setFilter({ query }), 500);

	render() {
		return html`<umb-collection-action-bundle></umb-collection-action-bundle>
			<uui-input
				@input=${this.#onSearch}
				label=${this.localize.term('general_search')}
				placeholder=${this.localize.term('general_search')}
				id="input-search"></uui-input> `;
	}

	static styles = [
		css`
			:host {
				height: 100%;
				width: 100%;
				display: flex;
				justify-content: space-between;
				white-space: nowrap;
				gap: var(--uui-size-space-5);
				align-items: center;
			}

			uui-input {
				width: 100%;
			}
		`,
	];
}

declare global {
	interface HTMLElementTagNameMap {
		[elementName]: UmbUserGroupCollectionHeaderElement;
	}
}
