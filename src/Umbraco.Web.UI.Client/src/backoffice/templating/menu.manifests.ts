import { ManifestSectionSidebarMenu, ManifestMenu } from '@umbraco-cms/extensions-registry';

const menu: ManifestMenu = {
	type: 'menu',
	alias: 'Umb.Menu.Templating',
	name: 'Templating Menu',
	meta: {
		label: 'Templating',
	},
};

const sectionSidebarMenu: ManifestSectionSidebarMenu = {
	type: 'sectionSidebarMenu',
	alias: 'Umb.SectionSidebarMenu.Templating',
	name: 'Templating Section Sidebar Menu',
	weight: 100,
	meta: {
		label: 'Templating',
		sections: ['Umb.Section.Settings'],
		menu: 'Umb.Menu.Templating',
	},
};

export const manifests = [menu, sectionSidebarMenu];
