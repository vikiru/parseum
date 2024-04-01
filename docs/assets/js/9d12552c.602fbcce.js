'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [758],
    {
        8352: (e, n, t) => {
            t.r(n),
                t.d(n, {
                    assets: () => o,
                    contentTitle: () => l,
                    default: () => d,
                    frontMatter: () => s,
                    metadata: () => a,
                    toc: () => c,
                });
            var i = t(4848),
                r = t(8453);
            const s = { title: 'Link' },
                l = void 0,
                a = {
                    id: 'link',
                    title: 'Link',
                    description: 'Overview',
                    source: '@site/docs/link.md',
                    sourceDirName: '.',
                    slug: '/link',
                    permalink: '/parseum/link',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Link' },
                    sidebar: 'docs',
                    previous: { title: 'List', permalink: '/parseum/list' },
                    next: { title: 'Image', permalink: '/parseum/image' },
                },
                o = {},
                c = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function p(e) {
                const n = {
                    code: 'code',
                    h2: 'h2',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, r.R)(),
                    ...e.components,
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(n.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, i.jsxs)(n.p, {
                            children: [
                                'A ',
                                (0, i.jsx)(n.strong, { children: 'link' }),
                                ' is an element which allows for the creation of a hyperlink pointing to a specific url. This link element can additionally have an optional title attribute. Links are represented by ',
                                (0, i.jsx)(n.code, { children: '<a>' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, i.jsx)(n.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, i.jsx)(n.pre, {
                            children: (0, i.jsx)(n.code, {
                                className: 'language-text',
                                children:
                                    '[link](https://example.com)\r\n\r\n[link](https://example.com "This is a link title")\n',
                            }),
                        }),
                        '\n',
                        (0, i.jsx)(n.pre, {
                            children: (0, i.jsx)(n.code, {
                                className: 'language-html',
                                children:
                                    '<p>\r\n    <a href="https://example.com">link</a>\r\n</p>\r\n<p>\r\n    <a href="https://example.com" title="This is a link title">link</a>\r\n</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function d(e = {}) {
                const { wrapper: n } = { ...(0, r.R)(), ...e.components };
                return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(p, { ...e }) }) : p(e);
            }
        },
        8453: (e, n, t) => {
            t.d(n, { R: () => l, x: () => a });
            var i = t(6540);
            const r = {},
                s = i.createContext(r);
            function l(e) {
                const n = i.useContext(s);
                return i.useMemo(
                    function () {
                        return 'function' == typeof e ? e(n) : { ...n, ...e };
                    },
                    [n, e],
                );
            }
            function a(e) {
                let n;
                return (
                    (n = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(r)
                            : e.components || r
                        : l(e.components)),
                    i.createElement(s.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
