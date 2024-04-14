'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [571],
    {
        5400: (e, n, t) => {
            t.r(n),
                t.d(n, {
                    assets: () => l,
                    contentTitle: () => c,
                    default: () => h,
                    frontMatter: () => i,
                    metadata: () => o,
                    toc: () => d,
                });
            var s = t(4848),
                r = t(8453);
            const i = { id: 'acknowledgments', title: '\u2728 Acknowledgements' },
                c = void 0,
                o = {
                    id: 'acknowledgments',
                    title: '\u2728 Acknowledgements',
                    description: '\u2728 Acknowledgments',
                    source: '@site/docs/acknowledgments.md',
                    sourceDirName: '.',
                    slug: '/acknowledgments',
                    permalink: '/parseum/acknowledgments',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { id: 'acknowledgments', title: '\u2728 Acknowledgements' },
                    sidebar: 'docs',
                    previous: { title: 'Comment', permalink: '/parseum/comment' },
                },
                l = {},
                d = [{ value: '\u2728 Acknowledgments', id: '-acknowledgments', level: 2 }];
            function a(e) {
                const n = { a: 'a', h2: 'h2', li: 'li', ul: 'ul', ...(0, r.R)(), ...e.components };
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(n.h2, { id: '-acknowledgments', children: '\u2728 Acknowledgments' }),
                        '\n',
                        (0, s.jsxs)(n.ul, {
                            children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, {
                                        href: 'https://github.com/peggyjs/peggy',
                                        children: 'Peggy.js',
                                    }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, {
                                        href: 'https://peggyjs.org/online',
                                        children: 'Peggy.js Online Editor',
                                    }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, {
                                        href: 'https://peggyjs.org/documentation',
                                        children: 'Peggy.js Documentation',
                                    }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, {
                                        href: 'https://www.markdownguide.org/cheat-sheet/',
                                        children: 'Markdown Guide Cheatsheet',
                                    }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, { href: 'https://regex101.com/', children: 'regex101' }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, { href: 'https://surge.sh/', children: 'Surge.sh' }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, {
                                        href: 'https://docusaurus.io/',
                                        children: 'Docusaurus',
                                    }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, {
                                        href: 'https://pages.github.com/',
                                        children: 'GitHub Pages',
                                    }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, {
                                        href: 'https://github.com/badges/shields',
                                        children: 'Shields Badges',
                                    }),
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: (0, s.jsx)(n.a, {
                                        href: 'https://favicon.io/favicon-generator/',
                                        children: 'Favicon Generator',
                                    }),
                                }),
                                '\n',
                            ],
                        }),
                    ],
                });
            }
            function h(e = {}) {
                const { wrapper: n } = { ...(0, r.R)(), ...e.components };
                return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
            }
        },
        8453: (e, n, t) => {
            t.d(n, { R: () => c, x: () => o });
            var s = t(6540);
            const r = {},
                i = s.createContext(r);
            function c(e) {
                const n = s.useContext(i);
                return s.useMemo(
                    function () {
                        return 'function' == typeof e ? e(n) : { ...n, ...e };
                    },
                    [n, e],
                );
            }
            function o(e) {
                let n;
                return (
                    (n = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(r)
                            : e.components || r
                        : c(e.components)),
                    s.createElement(i.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
