'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [781],
    {
        4933: (e, n, t) => {
            t.r(n),
                t.d(n, {
                    assets: () => o,
                    contentTitle: () => i,
                    default: () => d,
                    frontMatter: () => a,
                    metadata: () => c,
                    toc: () => l,
                });
            var r = t(4848),
                s = t(8453);
            const a = { title: 'HTML Tag' },
                i = void 0,
                c = {
                    id: 'html',
                    title: 'HTML Tag',
                    description: 'Overview',
                    source: '@site/docs/html.md',
                    sourceDirName: '.',
                    slug: '/html',
                    permalink: '/parseum/html',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'HTML Tag' },
                    sidebar: 'docs',
                    previous: { title: 'Superscript', permalink: '/parseum/superscript' },
                    next: { title: 'Comment', permalink: '/parseum/comment' },
                },
                o = {},
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
                    ...(0, s.R)(),
                    ...e.components,
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, r.jsxs)(n.p, {
                            children: [
                                (0, r.jsx)(n.strong, { children: 'HTML Tag' }),
                                ' refers to elements within the ',
                                (0, r.jsx)(n.strong, { children: 'HyperText Markup Language (HTML)' }),
                                ' such as ',
                                (0, r.jsx)(n.code, { children: '<p>' }),
                                ', ',
                                (0, r.jsx)(n.code, { children: '<h1>' }),
                                ', etc.',
                            ],
                        }),
                        '\n',
                        (0, r.jsx)(n.p, {
                            children:
                                'At present, all HTML tags are not rendered by the parser, but are captured accordingly.',
                        }),
                        '\n',
                        (0, r.jsx)(n.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, r.jsx)(n.pre, {
                            children: (0, r.jsx)(n.code, {
                                className: 'language-text',
                                children:
                                    '<p>This is a paragraph element using HTML. </p>\r\n\r\nThis is a paragraph element using Markdown.\n',
                            }),
                        }),
                        '\n',
                        (0, r.jsx)(n.pre, {
                            children: (0, r.jsx)(n.code, {
                                className: 'language-html',
                                children: '<p>This is a paragraph element using Markdown.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function d(e = {}) {
                const { wrapper: n } = { ...(0, s.R)(), ...e.components };
                return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(p, { ...e }) }) : p(e);
            }
        },
        8453: (e, n, t) => {
            t.d(n, { R: () => i, x: () => c });
            var r = t(6540);
            const s = {},
                a = r.createContext(s);
            function i(e) {
                const n = r.useContext(a);
                return r.useMemo(
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
                            ? e.components(s)
                            : e.components || s
                        : i(e.components)),
                    r.createElement(a.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
