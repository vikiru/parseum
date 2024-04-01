'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [948],
    {
        602: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => c,
                    contentTitle: () => a,
                    default: () => p,
                    frontMatter: () => r,
                    metadata: () => o,
                    toc: () => l,
                });
            var s = n(4848),
                i = n(8453);
            const r = { title: 'Emphasis' },
                a = void 0,
                o = {
                    id: 'emphasis',
                    title: 'Emphasis',
                    description: 'Overview',
                    source: '@site/docs/emphasis.md',
                    sourceDirName: '.',
                    slug: '/emphasis',
                    permalink: '/parseum/emphasis',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Emphasis' },
                    sidebar: 'docs',
                    previous: { title: 'Code', permalink: '/parseum/code' },
                    next: { title: 'Autolink', permalink: '/parseum/autoLink' },
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
                    ...(0, i.R)(),
                    ...e.components,
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, s.jsxs)(t.p, {
                            children: [
                                (0, s.jsx)(t.strong, { children: 'Emphasis' }),
                                ' is one of the many formatting options available within Markdown. It is typically used to highlight a selection of text. It is indicated by wrapping the desired text with ',
                                (0, s.jsx)(t.code, { children: '==' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, s.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-text',
                                children: '==This text is emphasized== and this text is not.\n',
                            }),
                        }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-html',
                                children: '<p><mark>This text is emphasized</mark> and this text is not.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, i.R)(), ...e.components };
                return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => a, x: () => o });
            var s = n(6540);
            const i = {},
                r = s.createContext(i);
            function a(e) {
                const t = s.useContext(r);
                return s.useMemo(
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
                            ? e.components(i)
                            : e.components || i
                        : a(e.components)),
                    s.createElement(r.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
