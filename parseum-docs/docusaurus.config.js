// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import path from 'path';
import { themes as prismThemes } from 'prism-react-renderer';

const lightTheme = prismThemes.github;
const darkTheme = prismThemes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Parseum',
    tagline: 'A markdown to HTML parser and editor built using Peggy.js, React, TailwindCSS and DaisyUI.',
    favicon: 'favicon.ico',
    staticDirectories: ['public', 'static'],
    trailingSlash: true,

    // Set the production url of your site here
    url: 'https://vikiru.github.io',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/parseum',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'vikiru', // Usually your GitHub org/user name.
    projectName: 'parseum', // Usually your repo name.

    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    plugins: [require.resolve('docusaurus-lunr-search')],

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    breadcrumbs: true,
                },
                gtag: {
                    trackingID: '#',
                    anonymizeIP: true,
                },
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
                sitemap: {
                    priority: 0.5,
                    ignorePatterns: [],
                    filename: 'sitemap.xml',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {
                    name: 'keywords',
                    content: 'Parseum, markdown, html, parser, editor, peggy.js, react, tailwindcss, daisyui',
                },
                {
                    name: 'description',
                    content:
                        'Parseum is a simple markdown-to-html parser and editor built using Peggy.js, React, TailwindCSS and DaisyUI.',
                },
            ],
            navbar: {
                hideOnScroll: true,
                title: 'Parseum',
                items: [
                    {
                        position: 'left',
                        label: 'Features',
                        href: '/features',
                    },
                    {
                        position: 'left',
                        label: 'Syntax Overview',
                        href: '/syntax',
                    },
                ],
            },
            docs: {
                sidebar: {
                    hideable: true,
                    autoCollapseCategories: true,
                },
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Getting Started',
                        items: [
                            {
                                label: 'Home',
                                to: '/',
                            },
                            {
                                label: 'Prerequisites',
                                to: '/prerequisites',
                            },
                            {
                                label: 'Setup',
                                to: '/setup',
                            },
                        ],
                    },
                    {
                        title: 'Development',
                        items: [
                            {
                                label: 'Scripts',
                                to: '/scripts',
                            },
                            {
                                label: 'Tech Stack',
                                to: '/stack',
                            },
                            {
                                label: 'Syntax Overview',
                                to: '/syntax',
                            },
                        ],
                    },
                    {
                        title: 'Conclusion',
                        items: [
                            {
                                label: 'Acknowledgments',
                                to: '/acknowledgments',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/vikiru/parseum',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Parseum, Visakan Kirubakaran. Built with Docusaurus.`,
            },
            prism: {
                theme: lightTheme,
                darkTheme,
            },
        }),
};

export default config;
