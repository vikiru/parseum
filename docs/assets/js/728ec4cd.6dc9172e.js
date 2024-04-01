'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [553],
    {
        4609: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => c,
                    contentTitle: () => r,
                    default: () => p,
                    frontMatter: () => i,
                    metadata: () => a,
                    toc: () => d,
                });
            var s = n(4848),
                o = n(8453);
            const i = { title: 'Code' },
                r = void 0,
                a = {
                    id: 'code',
                    title: 'Code',
                    description: 'Overview',
                    source: '@site/docs/code.md',
                    sourceDirName: '.',
                    slug: '/code',
                    permalink: '/parseum/code',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Code' },
                    sidebar: 'docs',
                    previous: { title: 'Bold Italic', permalink: '/parseum/boldItalic' },
                    next: { title: 'Emphasis', permalink: '/parseum/emphasis' },
                },
                c = {},
                d = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function l(e) {
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
                                (0, s.jsx)(t.strong, { children: 'Code' }),
                                ' is one of the many formatting options available within Markdown. It is typically used to denote a selection of text as code. It is indicated by wrapping the desired text with ',
                                (0, s.jsx)(t.code, { children: '`' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, s.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-text',
                                children: '`This is an inline code text` and this is not.\n',
                            }),
                        }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-html',
                                children: '<p><code>This is an inline code text</code> and this is not.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, o.R)(), ...e.components };
                return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => r, x: () => a });
            var s = n(6540);
            const o = {},
                i = s.createContext(o);
            function r(e) {
                const t = s.useContext(i);
                return s.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function a(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(o)
                            : e.components || o
                        : r(e.components)),
                    s.createElement(i.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
