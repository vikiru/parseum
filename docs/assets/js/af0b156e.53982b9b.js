'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [809],
    {
        7181: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    assets: () => c,
                    contentTitle: () => o,
                    default: () => p,
                    frontMatter: () => i,
                    metadata: () => u,
                    toc: () => l,
                });
            var r = s(4848),
                n = s(8453);
            const i = { id: 'prerequisites', title: '\ud83d\udcdd Prerequisites' },
                o = void 0,
                u = {
                    id: 'prerequisites',
                    title: '\ud83d\udcdd Prerequisites',
                    description: '\ud83d\udcdd Prerequisites',
                    source: '@site/docs/prerequisites.md',
                    sourceDirName: '.',
                    slug: '/prerequisites',
                    permalink: '/parseum/prerequisites',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { id: 'prerequisites', title: '\ud83d\udcdd Prerequisites' },
                    sidebar: 'docs',
                    previous: { title: '\ud83d\udcd6 Introduction', permalink: '/parseum/' },
                    next: { title: '\u26a1 Setup', permalink: '/parseum/setup' },
                },
                c = {},
                l = [{ value: '\ud83d\udcdd Prerequisites', id: '-prerequisites', level: 2 }];
            function a(e) {
                const t = { a: 'a', h2: 'h2', li: 'li', p: 'p', ul: 'ul', ...(0, n.R)(), ...e.components };
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(t.h2, { id: '-prerequisites', children: '\ud83d\udcdd Prerequisites' }),
                        '\n',
                        (0, r.jsxs)(t.p, {
                            children: [
                                'Ensure that the following dependencies are installed onto your machine by following the ',
                                (0, r.jsx)(t.a, { href: '/setup', children: 'Setup Instructions' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, r.jsxs)(t.ul, {
                            children: [
                                '\n',
                                (0, r.jsx)(t.li, {
                                    children: (0, r.jsx)(t.a, {
                                        href: 'https://nodejs.org/en/download',
                                        children: 'Node.js',
                                    }),
                                }),
                                '\n',
                            ],
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, n.R)(), ...e.components };
                return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
            }
        },
        8453: (e, t, s) => {
            s.d(t, { R: () => o, x: () => u });
            var r = s(6540);
            const n = {},
                i = r.createContext(n);
            function o(e) {
                const t = r.useContext(i);
                return r.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function u(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(n)
                            : e.components || n
                        : o(e.components)),
                    r.createElement(i.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
