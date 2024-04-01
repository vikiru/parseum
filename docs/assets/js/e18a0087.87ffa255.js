'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [735],
    {
        2039: (e, n, t) => {
            t.r(n),
                t.d(n, {
                    assets: () => c,
                    contentTitle: () => a,
                    default: () => p,
                    frontMatter: () => s,
                    metadata: () => i,
                    toc: () => m,
                });
            var r = t(4848),
                o = t(8453);
            const s = { title: 'Comment' },
                a = void 0,
                i = {
                    id: 'comment',
                    title: 'Comment',
                    description: 'Overview',
                    source: '@site/docs/comment.md',
                    sourceDirName: '.',
                    slug: '/comment',
                    permalink: '/parseum/comment',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Comment' },
                    sidebar: 'docs',
                    previous: { title: 'HTML Tag', permalink: '/parseum/html' },
                    next: { title: '\u2728 Acknowledgements', permalink: '/parseum/acknowledgments' },
                },
                c = {},
                m = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function l(e) {
                const n = {
                    code: 'code',
                    h2: 'h2',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, o.R)(),
                    ...e.components,
                };
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, r.jsxs)(n.p, {
                            children: [
                                'A ',
                                (0, r.jsx)(n.strong, { children: 'comment' }),
                                ' is an element not typically supported by many Markdown parsers, however the purpose is to provide a way for users to\r\nadd for example, explantory text to sections without impacting the rendered html.',
                            ],
                        }),
                        '\n',
                        (0, r.jsx)(n.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, r.jsx)(n.pre, {
                            children: (0, r.jsx)(n.code, {
                                className: 'language-text',
                                children:
                                    '[comment1]: # This is a comment.\r\n\r\nThis is a normal paragraph element.\n',
                            }),
                        }),
                        '\n',
                        (0, r.jsx)(n.pre, {
                            children: (0, r.jsx)(n.code, {
                                className: 'language-html',
                                children: '<p>This is a normal paragraph element.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: n } = { ...(0, o.R)(), ...e.components };
                return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(l, { ...e }) }) : l(e);
            }
        },
        8453: (e, n, t) => {
            t.d(n, { R: () => a, x: () => i });
            var r = t(6540);
            const o = {},
                s = r.createContext(o);
            function a(e) {
                const n = r.useContext(s);
                return r.useMemo(
                    function () {
                        return 'function' == typeof e ? e(n) : { ...n, ...e };
                    },
                    [n, e],
                );
            }
            function i(e) {
                let n;
                return (
                    (n = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(o)
                            : e.components || o
                        : a(e.components)),
                    r.createElement(s.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
