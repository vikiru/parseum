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
                    content: 'Parseum, markdown, html, parser, editor, react, tailwindcss, daisyui, peggy.js',
                },
                {
                    name: 'description',
                    content:
                        'Parseum is a simple markdown-to-html parser and editor built using Peggy.js, React, TailwindCSS and DaisyUI.',
                },
            ],
            image: 'logo.png',
            navbar: {
                hideOnScroll: true,
				title: 'Parseum',
                items: [],
            },
            footer: {
                style: 'dark',
                links: [
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
