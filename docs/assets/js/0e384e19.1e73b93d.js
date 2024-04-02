'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [976],
    {
        1512: (e, s, i) => {
            i.r(s),
                i.d(s, {
                    assets: () => l,
                    contentTitle: () => a,
                    default: () => h,
                    frontMatter: () => n,
                    metadata: () => o,
                    toc: () => c,
                });
            var t = i(4848),
                r = i(8453);
            const n = { slug: '/', title: '\ud83d\udcd6 Introduction' },
                a = void 0,
                o = {
                    id: 'intro',
                    title: '\ud83d\udcd6 Introduction',
                    description:
                        '<img src="https://wakatime.com/badge/user/5e62f99d-3a1e-4fd2-8f37-77919d626a67/project/018e902a-0f18-4cf8-b5e2-7922d2216d12.svg"',
                    source: '@site/docs/intro.md',
                    sourceDirName: '.',
                    slug: '/',
                    permalink: '/parseum/',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { slug: '/', title: '\ud83d\udcd6 Introduction' },
                    sidebar: 'docs',
                    next: { title: '\ud83d\udcdd Prerequisites', permalink: '/parseum/prerequisites' },
                },
                l = {},
                c = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: '\xa9\ufe0f License', id: '\ufe0f-license', level: 2 },
                ];
            function d(e) {
                const s = { a: 'a', h2: 'h2', hr: 'hr', p: 'p', strong: 'strong', ...(0, r.R)(), ...e.components };
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)('div', {
                            align: 'center',
                            id: 'logo',
                            children: (0, t.jsx)('img', { src: 'logo.png' }),
                        }),
                        '\n',
                        (0, t.jsxs)('p', {
                            align: 'center',
                            id: 'badges',
                            children: [
                                (0, t.jsx)('a', {
                                    href: 'https://vikiru.github.io/parseum/',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://img.shields.io/badge/documentation-docs-orange',
                                        alt: 'Documentation',
                                    }),
                                }),
                                (0, t.jsx)('a', {
                                    href: 'https://parseum.1.us-1.fl0.io/',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://img.shields.io/badge/Web-live%20site-blue',
                                        alt: 'Parseum live site hosted via Fl0',
                                    }),
                                }),
                                (0, t.jsx)('a', {
                                    href: 'https://wakatime.com/@vikiru/projects/hzdehaajds',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://wakatime.com/badge/user/5e62f99d-3a1e-4fd2-8f37-77919d626a67/project/018e902a-0f18-4cf8-b5e2-7922d2216d12.svg',
                                        alt: 'Wakatime Coding Stats for Parseum',
                                    }),
                                }),
                                (0, t.jsx)('a', {
                                    href: 'https://github.com/vikiru/parseum/blob/main/LICENSE',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://img.shields.io/badge/license-MIT-aqua',
                                        alt: 'MIT License Badge',
                                    }),
                                }),
                                (0, t.jsx)('a', {
                                    href: 'https://github.com/prettier/prettier',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square',
                                        alt: 'Code Style - Prettier',
                                    }),
                                }),
                                (0, t.jsx)('br', {}),
                                (0, t.jsx)('a', {
                                    href: 'https://github.com/vikiru/parseum/releases',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://img.shields.io/github/v/release/vikiru/parseum',
                                        alt: 'Release',
                                    }),
                                }),
                                (0, t.jsx)('a', {
                                    href: 'https://github.com/vikiru/parseum/issues?q=is%3Aissue+is%3Aclosed',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://img.shields.io/github/issues-closed/vikiru/parseum',
                                        alt: 'Closed Issues',
                                    }),
                                }),
                                (0, t.jsx)('a', {
                                    href: 'https://github.com/vikiru/parseum/pulls?q=is%3Apr+is%3Aclosed',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://img.shields.io/github/issues-pr-closed/vikiru/parseum?label=closed%20prs',
                                        alt: 'Closed PRs',
                                    }),
                                }),
                                (0, t.jsx)('a', {
                                    href: 'https://github.com/vikiru/parseum/actions/workflows/lint.yml',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://github.com/vikiru/parseum/actions/workflows/lint.yml/badge.svg',
                                        alt: 'GitHub Lint Action Workflow Status',
                                    }),
                                }),
                                (0, t.jsx)('a', {
                                    href: 'https://github.com/vikiru/parseum/actions/workflows/test.yml',
                                    children: (0, t.jsx)('img', {
                                        src: 'https://github.com/vikiru/parseum/actions/workflows/test.yml/badge.svg',
                                        alt: 'GitHub Test Workflow Status',
                                    }),
                                }),
                            ],
                        }),
                        '\n',
                        (0, t.jsx)(s.hr, {}),
                        '\n',
                        (0, t.jsx)(s.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, t.jsxs)(s.p, {
                            children: [
                                (0, t.jsx)(s.strong, { children: 'Parseum' }),
                                ' is a markdown parser and editor built utilizing ',
                                (0, t.jsx)(s.a, { href: 'https://github.com/peggyjs/peggy', children: 'Peggy.js' }),
                                ' which generates a parser from a defined ',
                                (0, t.jsx)(s.strong, { children: 'Parsing Expression Grammar (PEG)' }),
                                ' file. Combining this parser with ',
                                (0, t.jsx)(s.strong, { children: 'React' }),
                                ', ',
                                (0, t.jsx)(s.strong, { children: 'TailwindCSS' }),
                                ', and ',
                                (0, t.jsx)(s.strong, { children: 'DaisyUI' }),
                                ', allows for the creation of a simple markdown to html parser and editor with the flexibility to grow and evolve as needed by updating the defined grammar file.',
                            ],
                        }),
                        '\n',
                        (0, t.jsx)(s.h2, { id: '\ufe0f-license', children: '\xa9\ufe0f License' }),
                        '\n',
                        (0, t.jsxs)(s.p, {
                            children: [
                                'The contents of this repository are licensed under the terms and conditions of the ',
                                (0, t.jsx)(s.a, { href: 'https://choosealicense.com/licenses/mit/', children: 'MIT' }),
                                ' license.',
                            ],
                        }),
                        '\n',
                        (0, t.jsxs)(s.p, {
                            children: [
                                (0, t.jsx)(s.a, {
                                    href: 'https://github.com/vikiru/parseum/blob/main/LICENSE',
                                    children: 'MIT',
                                }),
                                ' \xa9 2024-present Visakan Kirubakaran.',
                            ],
                        }),
                    ],
                });
            }
            function h(e = {}) {
                const { wrapper: s } = { ...(0, r.R)(), ...e.components };
                return s ? (0, t.jsx)(s, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
            }
        },
        8453: (e, s, i) => {
            i.d(s, { R: () => a, x: () => o });
            var t = i(6540);
            const r = {},
                n = t.createContext(r);
            function a(e) {
                const s = t.useContext(n);
                return t.useMemo(
                    function () {
                        return 'function' == typeof e ? e(s) : { ...s, ...e };
                    },
                    [s, e],
                );
            }
            function o(e) {
                let s;
                return (
                    (s = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(r)
                            : e.components || r
                        : a(e.components)),
                    t.createElement(n.Provider, { value: s }, e.children)
                );
            }
        },
    },
]);
