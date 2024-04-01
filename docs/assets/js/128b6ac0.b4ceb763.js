'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [378],
    {
        5932: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => c,
                    contentTitle: () => a,
                    default: () => p,
                    frontMatter: () => r,
                    metadata: () => o,
                    toc: () => l,
                });
            var i = n(4848),
                s = n(8453);
            const r = { title: 'Italic' },
                a = void 0,
                o = {
                    id: 'italic',
                    title: 'Italic',
                    description: 'Overview',
                    source: '@site/docs/italic.md',
                    sourceDirName: '.',
                    slug: '/italic',
                    permalink: '/parseum/italic',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Italic' },
                    sidebar: 'docs',
                    previous: { title: 'Image', permalink: '/parseum/image' },
                    next: { title: 'Bold', permalink: '/parseum/bold' },
                },
                c = {},
                l = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function d(e) {
                const t = {
                    code: 'code',
                    h2: 'h2',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, s.R)(),
                    ...e.components,
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, i.jsxs)(t.p, {
                            children: [
                                (0, i.jsx)(t.strong, { children: 'Italic' }),
                                ' is one of the many formatting options available within Markdown. It is typically used to ensure that a selection of text stands out from the rest of the text. It is denoted by wrapping the desired text with ',
                                (0, i.jsx)(t.code, { children: '*' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, i.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, i.jsx)(t.pre, {
                            children: (0, i.jsx)(t.code, {
                                className: 'language-text',
                                children: '*This text is italic* and this text is not.\n',
                            }),
                        }),
                        '\n',
                        (0, i.jsx)(t.pre, {
                            children: (0, i.jsx)(t.code, {
                                className: 'language-html',
                                children: '<p><em>This text is italic</em> and this text is not.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, s.R)(), ...e.components };
                return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => a, x: () => o });
            var i = n(6540);
            const s = {},
                r = i.createContext(s);
            function a(e) {
                const t = i.useContext(r);
                return i.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function o(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(s)
                            : e.components || s
                        : a(e.components)),
                    i.createElement(r.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
