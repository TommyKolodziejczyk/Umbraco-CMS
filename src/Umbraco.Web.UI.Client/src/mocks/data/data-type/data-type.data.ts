import type {
	DataTypeItemResponseModel,
	DataTypeResponseModel,
	DataTypeTreeItemResponseModel,
} from '@umbraco-cms/backoffice/backend-api';

type UmbMockDataTypeModelHack = DataTypeResponseModel & DataTypeTreeItemResponseModel & DataTypeItemResponseModel;

export interface UmbMockDataTypeModel extends Omit<UmbMockDataTypeModelHack, 'type'> {}

export const data: Array<UmbMockDataTypeModel> = [
	{
		name: 'Folder 1',
		id: 'dt-folder1',
		parent: null,
		isFolder: true,
		hasChildren: false,
		editorAlias: '',
		values: [],
	},
	{
		name: 'Folder 2',
		id: 'dt-folder2',
		parent: null,
		isFolder: true,
		hasChildren: true,
		editorAlias: '',
		values: [],
	},
	{
		id: '0cc0eba1-9960-42c9-bf9b-60e150b429ae',
		parent: null,
		name: 'Textstring',
		editorAlias: 'Umbraco.TextBox',
		editorUiAlias: 'Umb.PropertyEditorUi.TextBox',
		values: [],
		hasChildren: false,
		isFolder: false,
	},
	{
		name: 'Text',
		id: 'dt-textBox',
		parent: null,
		editorAlias: 'Umbraco.TextBox',
		editorUiAlias: 'Umb.PropertyEditorUi.TextBox',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'maxChars',
				value: 10,
			},
		],
	},
	{
		name: 'Text Area',
		id: 'dt-textArea',
		parent: null,
		editorAlias: 'Umbraco.TextArea',
		editorUiAlias: 'Umb.PropertyEditorUi.TextArea',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'My JS Property Editor',
		id: 'dt-custom',
		parent: null,
		editorAlias: 'Umbraco.Label',
		editorUiAlias: 'My.PropertyEditorUI.Custom',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Color Picker',
		id: 'dt-colorPicker',
		parent: null,
		editorAlias: 'Umbraco.ColorPicker',
		editorUiAlias: 'Umb.PropertyEditorUi.ColorPicker',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'useLabel',
				value: true,
			},
			{
				alias: 'items',
				value: [
					{
						value: '#000000',
						label: 'Black',
					},
					{
						value: '#373737',
						label: 'Dark',
					},
					{
						value: '#9e9e9e',
						label: 'Light',
					},
					{
						value: '#607d8b',
						label: 'Sage',
					},
					{
						value: '#2196f3',
						label: 'Sapphire',
					},
					{
						value: '#03a9f4',
						label: 'Sky',
					},
					{
						value: '#3f51b5',
						label: 'Blue',
					},
					{
						value: '#9c27b0',
						label: 'Magenta',
					},
					{
						value: '#673ab7',
						label: 'Purps',
					},
				],
			},
		],
	},
	{
		name: 'Content Picker',
		id: 'dt-contentPicker',
		parent: null,
		editorAlias: 'Umbraco.ContentPicker',
		editorUiAlias: 'Umb.PropertyEditorUi.DocumentPicker',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'validationLimit',
				value: { min: 2, max: 4 },
			},
		],
	},
	{
		name: 'Eye Dropper',
		id: 'dt-eyeDropper',
		parent: null,
		editorAlias: 'Umbraco.ColorPicker.EyeDropper',
		editorUiAlias: 'Umb.PropertyEditorUi.EyeDropper',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				//showPalette
				alias: 'palette',
				value: [
					'#d0021b',
					'#f5a623',
					'#f8e71c',
					'#8b572a',
					'#7ed321',
					'#417505',
					'#bd10e0',
					'#9013fe',
					'#4a90e2',
					'#50e3c2',
					'#b8e986',
					'#000',
					'#444',
					'#888',
					'#ccc',
					'#fff',
				],
			},
			{
				alias: 'showAlpha',
				value: false,
			},
		],
	},
	{
		name: 'Multi URL Picker',
		id: 'dt-multiUrlPicker',
		parent: null,
		editorAlias: 'Umbraco.MultiUrlPicker',
		editorUiAlias: 'Umb.PropertyEditorUi.MultiUrlPicker',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'overlaySize',
				value: 'small',
			},
			{
				alias: 'hideAnchor',
				value: false,
			},
			{
				alias: 'ignoreUserStartNodes',
				value: false,
			},
			{
				alias: 'maxNumber',
				value: 2,
			},
			{
				alias: 'minNumber',
				value: 0,
			},
		],
	},
	{
		name: 'Multi Node Tree Picker',
		id: 'dt-multiNodeTreePicker',
		parent: null,
		editorAlias: 'Umbraco.MultiNodeTreePicker',
		editorUiAlias: 'Umb.PropertyEditorUi.TreePicker',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'startNode',
				value: {
					type: 'content',
					id: null,
					dynamicRoot: {
						originAlias: 'Root',
						querySteps: [
							{
								alias: 'FurthestAncestorOrSelf',
								anyOfDocTypeKeys: ['all-property-editors-document-type-id'],
							},
						],
					},
				},
			},
			{
				alias: 'minNumber',
				value: 0,
			},
			{
				alias: 'maxNumber',
				value: 3,
			},
			{
				alias: 'ignoreUserStartNodes',
				value: false,
			},
			{
				alias: 'showOpenButton',
				value: true,
			},
			{
				alias: 'filter',
				value: '',
			},
		],
	},
	{
		name: 'Date Picker',
		id: 'dt-datePicker',
		parent: null,
		editorAlias: 'Umbraco.DateTime',
		editorUiAlias: 'Umb.PropertyEditorUi.DatePicker',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'format',
				value: 'YYYY-MM-DDTHH:mm',
			},
			{
				alias: 'offsetTime',
				value: true,
			},
			{
				alias: 'enableTimezones',
				value: true,
			},
		],
	},
	{
		name: 'Date Picker With Time',
		id: 'dt-datePicker-time',
		parent: null,
		editorAlias: 'Umbraco.DateTime',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'format',
				value: 'YYYY-MM-DD HH:mm:ss',
			},
			{
				alias: 'offsetTime',
				value: true,
			},
		],
	},
	{
		name: 'Time',
		id: 'dt-time',
		parent: null,
		editorAlias: 'Umbraco.DateTime',
		editorUiAlias: 'Umb.PropertyEditorUi.DatePicker',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'format',
				value: 'HH:mm:ss',
			},
			{
				alias: 'offsetTime',
				value: false,
			},
		],
	},
	{
		name: 'Email',
		id: 'dt-email',
		parent: null,
		editorAlias: 'Umbraco.EmailAddress',
		editorUiAlias: 'Umb.PropertyEditorUi.Email',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'inputMode',
				value: 'email',
			},
		],
	},
	{
		name: 'Multiple Text String',
		id: 'dt-multipleTextString',
		parent: null,
		editorAlias: 'Umbraco.MultipleTextString',
		editorUiAlias: 'Umb.PropertyEditorUi.MultipleTextString',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'minNumber',
				value: 2,
			},
			{
				alias: 'maxNumber',
				value: 4,
			},
		],
	},
	{
		name: 'Dropdown',
		id: 'dt-dropdown',
		parent: null,
		editorAlias: 'Umbraco.DropDown.Flexible',
		editorUiAlias: 'Umb.PropertyEditorUi.Dropdown',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'multiple',
				value: false,
			},
			{
				alias: 'items',
				value: {
					0: { sortOrder: 1, value: 'First Option' },
					1: { sortOrder: 2, value: 'Second Option' },
					2: { sortOrder: 3, value: 'I Am the third Option' },
				},
			},
		],
	},
	{
		name: 'Slider',
		id: 'dt-slider',
		parent: null,
		editorAlias: 'Umbraco.Slider',
		editorUiAlias: 'Umb.PropertyEditorUi.Slider',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'enableRange',
				value: true,
			},
			{
				alias: 'initVal1',
				value: 10,
			},
			{
				alias: 'initVal2',
				value: 40,
			},
			{
				alias: 'maxVal',
				value: 50,
			},
			{
				alias: 'minVal',
				value: 0,
			},
			{
				alias: 'step',
				value: 10,
			},
		],
	},
	{
		name: 'Toggle',
		id: 'dt-toggle',
		parent: null,
		editorAlias: 'Umbraco.TrueFalse',
		editorUiAlias: 'Umb.PropertyEditorUi.Toggle',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'default',
				value: false,
			},
			{
				alias: 'labelOff',
				value: 'Not activated',
			},
			{
				alias: 'labelOn',
				value: 'Activated',
			},
			{
				alias: 'showLabels',
				value: true,
			},
		],
	},
	{
		name: 'Tags',
		id: 'dt-tags',
		parent: null,
		editorAlias: 'Umbraco.Tags',
		editorUiAlias: 'Umb.PropertyEditorUi.Tags',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'group',
				value: 'Fruits',
			},
			{
				alias: 'items',
				value: [],
			},
		],
	},
	{
		name: 'Markdown Editor',
		id: 'dt-markdownEditor',
		parent: null,
		editorAlias: 'Umbraco.MarkdownEditor',
		editorUiAlias: 'Umb.PropertyEditorUi.MarkdownEditor',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Radio Button List',
		id: 'dt-radioButtonList',
		parent: null,
		editorAlias: 'Umbraco.RadioButtonList',
		editorUiAlias: 'Umb.PropertyEditorUi.RadioButtonList',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'items',
				value: {
					0: { sortOrder: 1, value: 'First Option' },
					1: { sortOrder: 2, value: 'Second Option' },
					2: { sortOrder: 3, value: 'I Am the third Option' },
				},
			},
		],
	},
	{
		name: 'Checkbox List',
		id: 'dt-checkboxList',
		parent: null,
		editorAlias: 'Umbraco.CheckboxList',
		editorUiAlias: 'Umb.PropertyEditorUi.CheckboxList',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'items',
				value: {
					0: { sortOrder: 1, value: 'First Option' },
					1: { sortOrder: 2, value: 'Second Option' },
					2: { sortOrder: 3, value: 'I Am the third Option' },
				},
			},
		],
	},
	{
		name: 'Block List',
		id: 'dt-blockList',
		parent: null,
		editorAlias: 'Umbraco.BlockList',
		editorUiAlias: 'Umb.PropertyEditorUi.BlockList',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'blocks',
				value: [
					{
						label: 'Mocked Block Type for Block List',
						contentElementTypeKey: '4f68ba66-6fb2-4778-83b8-6ab4ca3a7c5c',
						settingsElementTypeKey: 'all-property-editors-document-type-id',
						icon: 'icon-server-alt',
					},
					{
						label: 'Mocked Coffee Block',
						contentElementTypeKey: 'coffee-umbraco-demo-block-id',
						iconColor: '#FFFDD0',
						backgroundColor: '#633f32',
						editorSize: 'medium',
						icon: 'icon-coffee',
					},
					{
						label: 'Headline',
						contentElementTypeKey: 'headline-umbraco-demo-block-id',
						backgroundColor: 'gold',
						editorSize: 'medium',
						icon: 'icon-edit',
					},
					{
						label: 'Image',
						contentElementTypeKey: 'image-umbraco-demo-block-id',
						editorSize: 'medium',
						icon: 'icon-picture',
					},
					{
						label: 'Rich Text',
						contentElementTypeKey: 'rich-text-umbraco-demo-block-id',
						editorSize: 'medium',
						icon: 'icon-diploma',
					},
					{
						label: 'Two Column Layout',
						contentElementTypeKey: 'two-column-layout-umbraco-demo-block-id',
						editorSize: 'medium',
						icon: 'icon-book-alt',
					},
				],
			},
			{
				alias: 'useInlineEditingAsDefault',
				value: false,
			},
			{
				alias: 'useLiveEditing',
				value: true,
			},
		],
	},
	{
		name: 'Media Picker',
		id: 'dt-mediaPicker',
		parent: null,
		editorAlias: 'Umbraco.MediaPicker3',
		editorUiAlias: 'Umb.PropertyEditorUi.MediaPicker',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Image Cropper',
		id: 'dt-imageCropper',
		parent: null,
		editorAlias: 'Umbraco.ImageCropper',
		editorUiAlias: 'Umb.PropertyEditorUi.ImageCropper',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'crops',
				value: [
					{
						alias: 'Square',
						height: 1000,
						width: 1000,
					},
					{
						alias: 'Banner',
						height: 600,
						width: 1200,
					},
					{
						alias: 'Mobile',
						height: 1200,
						width: 800,
					},
				],
			},
		],
	},
	{
		name: 'Upload Field',
		id: 'dt-uploadField',
		parent: null,
		editorAlias: 'Umbraco.UploadField',
		editorUiAlias: 'Umb.PropertyEditorUi.UploadField',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'fileExtensions',
				value: ['jpg', 'jpeg', 'png', 'pdf'],
			},
			{
				alias: 'multiple',
				value: true,
			},
		],
	},
	{
		name: 'Block Grid',
		id: 'dt-blockGrid',
		parent: null,
		editorAlias: 'Umbraco.BlockGrid',
		editorUiAlias: 'Umb.PropertyEditorUi.BlockGrid',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'blockGroups',
				value: [{ key: 'demo-block-group-id', name: 'Demo Blocks' }],
			},
			{
				alias: 'blocks',
				value: [
					{
						label: 'Mocked Block Type for Block Grid',
						contentElementTypeKey: '4f68ba66-6fb2-4778-83b8-6ab4ca3a7c5c',
					},
					{
						label: 'Mocked Coffee Block',
						contentElementTypeKey: 'coffee-umbraco-demo-block-id',
						iconColor: '#FFFDD0',
						backgroundColor: '#633f32',
						editorSize: 'medium',
						icon: 'icon-coffee',
					},

					{
						label: 'Headline',
						contentElementTypeKey: 'headline-umbraco-demo-block-id',
						backgroundColor: 'gold',
						editorSize: 'medium',
						icon: 'icon-edit',
						groupKey: 'demo-block-group-id',
					},
					{
						label: 'Image',
						contentElementTypeKey: 'image-umbraco-demo-block-id',
						editorSize: 'medium',
						icon: 'icon-picture',

						groupKey: 'demo-block-group-id',
					},
					{
						label: 'Rich Text',
						contentElementTypeKey: 'rich-text-umbraco-demo-block-id',
						editorSize: 'medium',
						icon: 'icon-diploma',
						groupKey: 'demo-block-group-id',
					},
					{
						label: 'Two Column Layout',
						contentElementTypeKey: 'two-column-layout-umbraco-demo-block-id',
						editorSize: 'medium',
						icon: 'icon-book-alt',
						groupKey: 'demo-block-group-id',
					},
					{
						label: 'Test broken group key',
						contentElementTypeKey: 'test-block-id',
						editorSize: 'medium',
						icon: 'icon-war',
						groupKey: 'group-id-that-does-not-exist',
					},
				],
			},
		],
	},
	{
		name: 'Collection View',
		id: 'dt-collectionView',
		parent: null,
		editorAlias: 'Umbraco.ListView',
		editorUiAlias: 'Umb.PropertyEditorUi.CollectionView',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Icon Picker',
		id: 'dt-iconPicker',
		parent: null,
		editorAlias: 'Umbraco.IconPicker',
		editorUiAlias: 'Umb.PropertyEditorUi.IconPicker',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Rich Text Editor',
		id: 'dt-richTextEditor',
		parent: null,
		editorAlias: 'Umbraco.RichText',
		editorUiAlias: 'Umb.PropertyEditorUi.TinyMCE',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'hideLabel',
				value: true,
			},
			{ alias: 'dimensions', value: { height: 500 } },
			{ alias: 'maxImageSize', value: 500 },
			{ alias: 'ignoreUserStartNodes', value: false },
			{
				alias: 'validElements',
				value:
					'+a[id|style|rel|data-id|data-udi|rev|charset|hreflang|dir|lang|tabindex|accesskey|type|name|href|target|title|class|onfocus|onblur|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],-strong/-b[class|style],-em/-i[class|style],-strike[class|style],-s[class|style],-u[class|style],#p[id|style|dir|class|align],-ol[class|reversed|start|style|type],-ul[class|style],-li[class|style],br[class],img[id|dir|lang|longdesc|usemap|style|class|src|onmouseover|onmouseout|border|alt=|title|hspace|vspace|width|height|align|umbracoorgwidth|umbracoorgheight|onresize|onresizestart|onresizeend|rel|data-id],-sub[style|class],-sup[style|class],-blockquote[dir|style|class],-table[border=0|cellspacing|cellpadding|width|height|class|align|summary|style|dir|id|lang|bgcolor|background|bordercolor],-tr[id|lang|dir|class|rowspan|width|height|align|valign|style|bgcolor|background|bordercolor],tbody[id|class],thead[id|class],tfoot[id|class],#td[id|lang|dir|class|colspan|rowspan|width|height|align|valign|style|bgcolor|background|bordercolor|scope],-th[id|lang|dir|class|colspan|rowspan|width|height|align|valign|style|scope],caption[id|lang|dir|class|style],-div[id|dir|class|align|style],-span[class|align|style],-pre[class|align|style],address[class|align|style],-h1[id|dir|class|align|style],-h2[id|dir|class|align|style],-h3[id|dir|class|align|style],-h4[id|dir|class|align|style],-h5[id|dir|class|align|style],-h6[id|style|dir|class|align|style],hr[class|style],small[class|style],dd[id|class|title|style|dir|lang],dl[id|class|title|style|dir|lang],dt[id|class|title|style|dir|lang],object[class|id|width|height|codebase|*],param[name|value|_value|class],embed[type|width|height|src|class|*],map[name|class],area[shape|coords|href|alt|target|class],bdo[class],button[class],iframe[*],figure,figcaption,video[*],audio[*],picture[*],source[*],canvas[*]',
			},
			{ alias: 'invalidElements', value: 'font' },
			{ alias: 'stylesheets', value: [] },
			{
				alias: 'toolbar',
				value: [
					'sourcecode',
					'undo',
					'redo',
					'styles',
					'bold',
					'italic',
					'alignleft',
					'aligncenter',
					'alignright',
					'bullist',
					'numlist',
					'outdent',
					'indent',
					'link',
					'unlink',
					'anchor',
					'table',
					'umbmediapicker',
					'umbembeddialog',
				],
			},
			{
				alias: 'plugins',
				value: [
					{
						name: 'anchor',
					},
					{
						name: 'charmap',
					},
					{
						name: 'table',
					},
					{
						name: 'lists',
					},
					{
						name: 'advlist',
					},
					{
						name: 'autolink',
					},
					{
						name: 'directionality',
					},
					{
						name: 'searchreplace',
					},
				],
			},
		],
	},
	{
		name: 'Label',
		id: 'dt-label',
		parent: null,
		editorAlias: 'Umbraco.Label',
		editorUiAlias: 'Umb.PropertyEditorUi.Label',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Integer',
		id: 'dt-integer',
		parent: null,
		editorAlias: 'Umbraco.Integer',
		editorUiAlias: 'Umb.PropertyEditorUi.Integer',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Decimal',
		id: 'dt-decimal',
		parent: null,
		editorAlias: 'Umbraco.Decimal',
		editorUiAlias: 'Umb.PropertyEditorUi.Decimal',
		hasChildren: false,
		isFolder: false,
		values: [
			{
				alias: 'step',
				value: 0.01,
			},
		],
	},
	{
		name: 'User Picker',
		id: 'dt-userPicker',
		parent: null,
		editorAlias: 'Umbraco.UserPicker',
		editorUiAlias: 'Umb.PropertyEditorUi.UserPicker',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Member Picker',
		id: 'dt-memberPicker',
		parent: null,
		editorAlias: 'Umbraco.MemberPicker',
		editorUiAlias: 'Umb.PropertyEditorUi.MemberPicker',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Member Group Picker',
		id: 'dt-memberGroupPicker',
		parent: null,
		editorAlias: 'Umbraco.MemberGroupPicker',
		editorUiAlias: 'Umb.PropertyEditorUi.MemberGroupPicker',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Data Type in folder',
		id: 'dt-data-type-in-folder',
		parent: { id: 'dt-folder2' },
		editorAlias: 'Umbraco.MemberGroupPicker',
		editorUiAlias: 'Umb.PropertyEditorUi.MemberGroupPicker',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
	{
		name: 'Static File Picker',
		id: 'dt-staticFilePicker',
		parent: null,
		editorAlias: 'Umbraco.Label',
		editorUiAlias: 'Umb.PropertyEditorUi.StaticFilePicker',
		hasChildren: false,
		isFolder: false,
		values: [],
	},
];
