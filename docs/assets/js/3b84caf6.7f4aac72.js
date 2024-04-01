'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [120],
    {
        8923: (e, t, s) => {
            s.r(t),
                s.d(t, {
                    assets: () => a,
                    contentTitle: () => o,
                    default: () => p,
                    frontMatter: () => i,
                    metadata: () => c,
                    toc: () => l,
                });
            var r = s(4848),
                n = s(8453);
            const i = { title: 'Subscript' },
                o = void 0,
                c = {
                    id: 'subscript',
                    title: 'Subscript',
                    description: 'Overview',
                    source: '@site/docs/subscript.md',
                    sourceDirName: '.',
                    slug: '/subscript',
                    permalink: '/parseum/subscript',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Subscript' },
                    sidebar: 'docs',
                    previous: { title: 'Strikethrough', permalink: '/parseum/strikethrough' },
                    next: { title: 'Superscript', permalink: '/parseum/superscript' },
                },
                a = {},
                l = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function u(e) {
                const t = {
                    code: 'code',
                    h2: 'h2',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, n.R)(),
                    ...e.components,
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, r.jsxs)(t.p, {
                            children: [
                                (0, r.jsx)(t.strong, { children: 'Subscript' }),
                                ' is one of the many formatting options available within Markdown, although typically not supported by most parsers. It is typically used to denote a selection of text that should be rendered visually different from other text.',
                            ],
                        }),
                        '\n',
                        (0, r.jsxs)(t.p, {
                            children: [
                                'Subscript text is usually smaller and aligned vertically lower compared to other text. Subscript text is denoted by wrapping the desired text with ',
                                (0, r.jsx)(t.code, { children: '~' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, r.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, r.jsx)(t.pre, {
                            children: (0, r.jsx)(t.code, {
                                className: 'language-text',
                                children: 'This text is not using a subscript, but this ~text~ is.\n',
                            }),
                        }),
                        '\n',
                        (0, r.jsx)(t.pre, {
                            children: (0, r.jsx)(t.code, {
                                className: 'language-html',
                                children: '<p>This text is not using a subscript, but this <sub>text</sub> is.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, n.R)(), ...e.components };
                return t ? (0, r.jsx)(t, { ...e, children: (0, r.jsx)(u, { ...e }) }) : u(e);
            }
        },
        8453: (e, t, s) => {
            s.d(t, { R: () => o, x: () => c });
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
            function c(e) {
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
