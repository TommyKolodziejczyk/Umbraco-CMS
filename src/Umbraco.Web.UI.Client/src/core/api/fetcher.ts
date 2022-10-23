import { Fetcher } from 'openapi-typescript-fetch';

import type { paths } from '../../../schemas/generated-schema';

const fetcher = Fetcher.for<paths>();

fetcher.configure({
	baseUrl: '/umbraco/backoffice',
});

export const getServerStatus = fetcher.path('/server/status').method('get').create();
export const getServerVersion = fetcher.path('/server/version').method('get').create();
export const getUser = fetcher.path('/user').method('get').create();
export const postUserLogin = fetcher.path('/user/login').method('post').create();
export const postUserLogout = fetcher.path('/user/logout').method('post').create();
export const getUserSections = fetcher.path('/user/sections').method('get').create();
export const getInstallSettings = fetcher.path('/install/settings').method('get').create();
export const postInstallValidateDatabase = fetcher.path('/install/validateDatabase').method('post').create();
export const postInstallSetup = fetcher.path('/install/setup').method('post').create();
export const getUpgradeSettings = fetcher.path('/upgrade/settings').method('get').create();
export const PostUpgradeAuthorize = fetcher.path('/upgrade/authorize').method('post').create();
export const getManifests = fetcher.path('/manifests').method('get').create();
export const getPackagesInstalled = fetcher.path('/manifests/packages/installed').method('get').create();
export const getConsentLevels = fetcher.path('/telemetry/ConsentLevels').method('get').create();
export const getConsentLevel = fetcher.path('/telemetry/ConsentLevel').method('get').create();
export const postConsentLevel = fetcher.path('/telemetry/ConsentLevel').method('post').create();

export const getIndexers = fetcher.path('/examine/index').method('get').create();
export const getSearchers = fetcher.path('/examine/searchers').method('get').create();
export const getIndex = fetcher.path('/examine/index/{indexName}').method('get').create();
export const postIndexRebuild = fetcher.path('/examine/index/{indexName}/rebuild').method('post').create();
export const getSearchResultFromIndex = fetcher.path('/examine/index/{indexName}/{searchQuery}').method('get').create();
export const getSearchResultFromSearchers = fetcher
	.path('/examine/searchers/{searcherName}/{searchQuery}')
	.method('get')
	.create();

// Property Editors
export const getPropertyEditorsList = fetcher.path('/property-editors/list').method('get').create();
export const getPropertyEditor = fetcher
	.path('/property-editors/property-editor/{propertyEditorAlias}')
	.method('get')
	.create();
export const getPropertyEditorConfig = fetcher
	.path('/property-editors/property-editor/config/{propertyEditorAlias}')
	.method('get')
	.create();

export const getPublishedCacheStatus = fetcher.path('/published-cache/status').method('get').create();
export const postPublishedCacheReload = fetcher.path('/published-cache/reload').method('post').create();
export const postPublishedCacheRebuild = fetcher.path('/published-cache/rebuild').method('post').create();
export const getPublishedCacheCollect = fetcher.path('/published-cache/collect').method('get').create();
