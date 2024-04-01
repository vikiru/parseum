'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [924],
    {
        4087: (e, n, t) => {
            t.r(n),
                t.d(n, {
                    assets: () => i,
                    contentTitle: () => a,
                    default: () => u,
                    frontMatter: () => s,
                    metadata: () => c,
                    toc: () => l,
                });
            var o = t(4848),
                r = t(8453);
            const s = { title: 'Autolink' },
                a = void 0,
                c = {
                    id: 'autoLink',
                    title: 'Autolink',
                    description: 'Overview',
                    source: '@site/docs/autoLink.md',
                    sourceDirName: '.',
                    slug: '/autoLink',
                    permalink: '/parseum/autoLink',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Autolink' },
                    sidebar: 'docs',
                    previous: { title: 'Emphasis', permalink: '/parseum/emphasis' },
                    next: { title: 'Blockquote', permalink: '/parseum/blockquote' },
                },
                i = {},
                l = [
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
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(n.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, o.jsxs)(n.p, {
                            children: [
                                'An ',
                                (0, o.jsx)(n.strong, { children: 'auto link' }),
                                ' is a hyperlink to a given url, represented by an anchor tag (',
                                (0, o.jsx)(n.code, { children: '<a>' }),
                                '). The link is enclosed between an ',
                                (0, o.jsx)(n.code, { children: '<' }),
                                ' and ',
                                (0, o.jsx)(n.code, { children: '>' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, o.jsx)(n.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, o.jsx)(n.pre, {
                            children: (0, o.jsx)(n.code, {
                                className: 'language-text',
                                children: '<http://www.google.com>\r\n<https://www.google.com>\r\n<www.google.com>\n',
                            }),
                        }),
                        '\n',
                        (0, o.jsx)(n.pre, {
                            children: (0, o.jsx)(n.code, {
                                className: 'language-html',
                                children:
                                    '<p>\r\n    <a href="http://www.google.com">http://www.google.com</a>\r\n</p>\r\n<p>\r\n    <a href="https://www.google.com">https://www.google.com</a>\r\n</p>\r\n<p>\r\n    <a href="www.google.com">www.google.com</a>\r\n</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function u(e = {}) {
                const { wrapper: n } = { ...(0, r.R)(), ...e.components };
                return n ? (0, o.jsx)(n, { ...e, children: (0, o.jsx)(p, { ...e }) }) : p(e);
            }
        },
        8453: (e, n, t) => {
            t.d(n, { R: () => a, x: () => c });
            var o = t(6540);
            const r = {},
                s = o.createContext(r);
            function a(e) {
                const n = o.useContext(s);
                return o.useMemo(
                    function () {
                        return 'function' == typeof e ? e(n) : { ...n, ...e };
                    },
                    [n, e],
                );
            }
            function c(e) {
                let n;
                return (
                    (n = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(r)
                            : e.components || r
                        : a(e.components)),
                    o.createElement(s.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
