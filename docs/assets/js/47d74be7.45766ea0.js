'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [341],
    {
        6059: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => l,
                    contentTitle: () => r,
                    default: () => p,
                    frontMatter: () => s,
                    metadata: () => a,
                    toc: () => c,
                });
            var i = n(4848),
                o = n(8453);
            const s = { title: 'Bold Italic' },
                r = void 0,
                a = {
                    id: 'boldItalic',
                    title: 'Bold Italic',
                    description: 'Overview',
                    source: '@site/docs/boldItalic.md',
                    sourceDirName: '.',
                    slug: '/boldItalic',
                    permalink: '/parseum/boldItalic',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Bold Italic' },
                    sidebar: 'docs',
                    previous: { title: 'Bold', permalink: '/parseum/bold' },
                    next: { title: 'Code', permalink: '/parseum/code' },
                },
                l = {},
                c = [
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
                    ...(0, o.R)(),
                    ...e.components,
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, i.jsxs)(t.p, {
                            children: [
                                (0, i.jsx)(t.strong, { children: 'Bold Italic' }),
                                ' is one of the many formatting options available within Markdown. It is a combination of ',
                                (0, i.jsx)(t.code, { children: 'bold' }),
                                ' and ',
                                (0, i.jsx)(t.code, { children: 'italic' }),
                                ' formatting. This is typically denoted by wrapping the desired text with ',
                                (0, i.jsx)(t.code, { children: '***' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, i.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, i.jsx)(t.pre, {
                            children: (0, i.jsx)(t.code, {
                                className: 'language-text',
                                children: '***This text is bold and italic*** and this text is not.\n',
                            }),
                        }),
                        '\n',
                        (0, i.jsx)(t.pre, {
                            children: (0, i.jsx)(t.code, {
                                className: 'language-html',
                                children:
                                    '<p>\r\n    <em><strong>This text is bold and italic</strong></em> and this text is not.\r\n</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, o.R)(), ...e.components };
                return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => r, x: () => a });
            var i = n(6540);
            const o = {},
                s = i.createContext(o);
            function r(e) {
                const t = i.useContext(s);
                return i.useMemo(
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
                    i.createElement(s.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
