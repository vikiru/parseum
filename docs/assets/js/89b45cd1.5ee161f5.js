'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [949],
    {
        3471: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => a,
                    contentTitle: () => i,
                    default: () => p,
                    frontMatter: () => r,
                    metadata: () => l,
                    toc: () => d,
                });
            var s = n(4848),
                o = n(8453);
            const r = { title: 'Bold' },
                i = void 0,
                l = {
                    id: 'bold',
                    title: 'Bold',
                    description: 'Overview',
                    source: '@site/docs/bold.md',
                    sourceDirName: '.',
                    slug: '/bold',
                    permalink: '/parseum/bold',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Bold' },
                    sidebar: 'docs',
                    previous: { title: 'Italic', permalink: '/parseum/italic' },
                    next: { title: 'Bold Italic', permalink: '/parseum/boldItalic' },
                },
                a = {},
                d = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function c(e) {
                const t = {
                    code: 'code',
                    h2: 'h2',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, o.R)(),
                    ...e.components,
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, s.jsxs)(t.p, {
                            children: [
                                (0, s.jsx)(t.strong, { children: 'Bold' }),
                                ' is one of the many formatting options available within Markdown. It is typically used to ensure that a selection of text stands out from the rest of the text. It is denoted by wrapping the desired text with ',
                                (0, s.jsx)(t.code, { children: '**' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, s.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-text',
                                children: '**This text is bolded** and this text is not.\n',
                            }),
                        }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-html',
                                children: '<p><strong>This text is bolded</strong> and this text is not.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, o.R)(), ...e.components };
                return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => i, x: () => l });
            var s = n(6540);
            const o = {},
                r = s.createContext(o);
            function i(e) {
                const t = s.useContext(r);
                return s.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function l(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(o)
                            : e.components || o
                        : i(e.components)),
                    s.createElement(r.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
