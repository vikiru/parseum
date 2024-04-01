'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [732],
    {
        1154: (e, n, t) => {
            t.r(n),
                t.d(n, {
                    assets: () => a,
                    contentTitle: () => i,
                    default: () => u,
                    frontMatter: () => s,
                    metadata: () => l,
                    toc: () => c,
                });
            var r = t(4848),
                o = t(8453);
            const s = { title: 'Horizontal Rule' },
                i = void 0,
                l = {
                    id: 'horizontalRule',
                    title: 'Horizontal Rule',
                    description: 'Overview',
                    source: '@site/docs/horizontalRule.md',
                    sourceDirName: '.',
                    slug: '/horizontalRule',
                    permalink: '/parseum/horizontalRule',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Horizontal Rule' },
                    sidebar: 'docs',
                    previous: { title: 'Header', permalink: '/parseum/header' },
                    next: { title: 'List', permalink: '/parseum/list' },
                },
                a = {},
                c = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function d(e) {
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
                                (0, r.jsx)(n.strong, { children: 'horizontal rule' }),
                                ' is an element which is usually used to separate different sections of text from each other, it is visually represented by a horizontal line. This is typically denoted using ',
                                (0, r.jsx)(n.code, { children: '---' }),
                                ' / ',
                                (0, r.jsx)(n.code, { children: '***' }),
                                ' / ',
                                (0, r.jsx)(n.code, { children: '___' }),
                                ' on a blank line.',
                            ],
                        }),
                        '\n',
                        (0, r.jsx)(n.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, r.jsx)(n.pre, {
                            children: (0, r.jsx)(n.code, {
                                className: 'language-text',
                                children: '---\r\n***\r\n___\n',
                            }),
                        }),
                        '\n',
                        (0, r.jsx)(n.pre, {
                            children: (0, r.jsx)(n.code, {
                                className: 'language-html',
                                children: '<hr />\r\n<hr />\r\n<hr />\n',
                            }),
                        }),
                    ],
                });
            }
            function u(e = {}) {
                const { wrapper: n } = { ...(0, o.R)(), ...e.components };
                return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
            }
        },
        8453: (e, n, t) => {
            t.d(n, { R: () => i, x: () => l });
            var r = t(6540);
            const o = {},
                s = r.createContext(o);
            function i(e) {
                const n = r.useContext(s);
                return r.useMemo(
                    function () {
                        return 'function' == typeof e ? e(n) : { ...n, ...e };
                    },
                    [n, e],
                );
            }
            function l(e) {
                let n;
                return (
                    (n = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(o)
                            : e.components || o
                        : i(e.components)),
                    r.createElement(s.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
