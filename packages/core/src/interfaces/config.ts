import { Library } from './library';
import { NavigationItem } from './navigation-item';
import { Locale } from './locale';
export interface HomeDocMeta {
    title: string;
    hero: {
        title: string;
        description: string;
        actions: { text: string; link: string }[];
    };
    features: {
        icon: string;
        title: string;
        description: string;
    }[];
    footer: string;
}

export type DocgeniMode = 'full' | 'lite';

export interface DocgeniNavItem {
    /** Title for nav item */
    title: string;
    /** Route path for nav item */
    path: string;
    /** Whether is external link */
    isExternal?: boolean;
    /** Lib name for libs */
    lib?: string;
    /** Locales */
    locales?: {
        [key: string]: {
            title: string;
        };
    };
}
export interface DocgeniConfig {
    /* Title of documentation, e.g: Docgeni */
    title?: string;
    /** Heading of documentation, e.g: Doc Generator, default is same as title */
    // heading?: string;
    /* Description of documentation */
    description?: string;
    /* Mode of documentation, full mode contains nav, home page, lite mode only contains menu and doc viewers */
    mode?: DocgeniMode;
    /** Theme, angular navbar style and default style */
    theme?: 'default' | 'angular';
    /* Base href of documentation, default is / */
    baseHref?: string;
    /* Logo url*/
    logoUrl?: string;
    /* Public dir, default is .docgeni/public */
    publicDir?: string;
    /* Repo url*/
    repoUrl?: string;
    /* Docs dir, default is 'docs' */
    docsDir?: string;
    /** Site default dir .docgeni */
    siteDir?: string;
    /* Site output dir, default is dist/docgeni-site */
    outputDir?: string;
    /* Angular demo site name in angular.json */
    siteProjectName?: string;
    /* Angular libraries */
    libs?: Library[];
    /* Navigations for menu and nav */
    navs?: DocgeniNavItem[];
    // /** 覆盖自动生成的导航 */
    // navsCover?: boolean;
    // /* In silent mode, log messages aren't logged in the console */
    // silent?: boolean;
    /** Locales */
    locales?: Locale[];
    /** Default locale */
    defaultLocale?: string;
}

// For Angular Template
export interface DocgeniSiteConfig {
    /* Title of documentation, e.g: Docgeni */
    title: string;
    /** Heading of documentation, e.g: Doc Generator, default is same as title */
    heading?: string;
    /* Description of documentation */
    description?: string;
    /* Mode of documentation, full mode contains nav, home page, lite mode only contains menu and doc viewers */
    mode?: 'full' | 'lite';
    /** Theme, angular navbar style and default style */
    theme?: 'default' | 'angular';
    /* Base href of documentation, default is / */
    baseHref?: string;
    /* Heads of documentation*/
    heads?: [];
    /* Logo url*/
    logoUrl?: string;
    /* Repo url*/
    repoUrl?: string;
    /** Home meta */
    homeMeta?: HomeDocMeta;
    /** Locales */
    locales?: Locale[];
    defaultLocale?: string;
}
