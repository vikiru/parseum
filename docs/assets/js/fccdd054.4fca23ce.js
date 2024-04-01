'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [772],
    {
        1813: (e, r, a) => {
            a.r(r),
                a.d(r, {
                    assets: () => h,
                    contentTitle: () => l,
                    default: () => c,
                    frontMatter: () => s,
                    metadata: () => d,
                    toc: () => i,
                });
            var n = a(4848),
                t = a(8453);
            const s = { title: 'Header' },
                l = void 0,
                d = {
                    id: 'header',
                    title: 'Header',
                    description: 'Overview',
                    source: '@site/docs/header.md',
                    sourceDirName: '.',
                    slug: '/header',
                    permalink: '/parseum/header',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Header' },
                    sidebar: 'docs',
                    previous: { title: 'Paragraph', permalink: '/parseum/paragraph' },
                    next: { title: 'Horizontal Rule', permalink: '/parseum/horizontalRule' },
                },
                h = {},
                i = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                    { value: 'Normal Header Syntax (ATX Header)', id: 'normal-header-syntax-atx-header', level: 3 },
                    {
                        value: 'Alternate Header Syntax (Setext Header)',
                        id: 'alternate-header-syntax-setext-header',
                        level: 3,
                    },
                ];
            function o(e) {
                const r = {
                    code: 'code',
                    h2: 'h2',
                    h3: 'h3',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, t.R)(),
                    ...e.components,
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(r.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, n.jsxs)(r.p, {
                            children: [
                                'A ',
                                (0, n.jsx)(r.strong, { children: 'header' }),
                                ' is an element that is usually used to represent the title of a distinct section of text, denoted by a ',
                                (0, n.jsx)(r.code, { children: '#' }),
                                '. A header ranges from level 1 to level 6, where the level of the header is determined by the number of ',
                                (0, n.jsx)(r.code, { children: '#' }),
                                ' characters and if the number of ',
                                (0, n.jsx)(r.code, { children: '#' }),
                                ' characters exceeds 6, it will be parsed as a paragraph.',
                            ],
                        }),
                        '\n',
                        (0, n.jsx)(r.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, n.jsx)(r.h3, {
                            id: 'normal-header-syntax-atx-header',
                            children: 'Normal Header Syntax (ATX Header)',
                        }),
                        '\n',
                        (0, n.jsx)(r.pre, {
                            children: (0, n.jsx)(r.code, {
                                className: 'language-text',
                                children:
                                    '# This is a header of level 1\r\n## This is a header of level 2\r\n### This is a header of level 3\r\n#### This is a header of level 4\r\n##### This is a header of level 5\r\n###### This is a header of level 6\r\n####### This is a normal paragraph.\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(r.pre, {
                            children: (0, n.jsx)(r.code, {
                                className: 'language-html',
                                children:
                                    '<h1>This is a header of level 1</h1>\r\n<h2>This is a header of level 2</h2>\r\n<h3>This is a header of level 3</h3>\r\n<h4>This is a header of level 4</h4>\r\n<h5>This is a header of level 5</h5>\r\n<h6>This is a header of level 6</h6>\r\n<p>####### This is a normal paragraph.</p>\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(r.h3, {
                            id: 'alternate-header-syntax-setext-header',
                            children: 'Alternate Header Syntax (Setext Header)',
                        }),
                        '\n',
                        (0, n.jsx)(r.pre, {
                            children: (0, n.jsx)(r.code, {
                                className: 'language-text',
                                children: 'Header Level 1\r\n=====\r\n\r\nHeader Level 2\r\n-----\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(r.pre, {
                            children: (0, n.jsx)(r.code, {
                                className: 'language-html',
                                children: '<h1>Header Level 1</h1>\r\n<h2>Header Level 2</h2>\n',
                            }),
                        }),
                    ],
                });
            }
            function c(e = {}) {
                const { wrapper: r } = { ...(0, t.R)(), ...e.components };
                return r ? (0, n.jsx)(r, { ...e, children: (0, n.jsx)(o, { ...e }) }) : o(e);
            }
        },
        8453: (e, r, a) => {
            a.d(r, { R: () => l, x: () => d });
            var n = a(6540);
            const t = {},
                s = n.createContext(t);
            function l(e) {
                const r = n.useContext(s);
                return n.useMemo(
                    function () {
                        return 'function' == typeof e ? e(r) : { ...r, ...e };
                    },
                    [r, e],
                );
            }
            function d(e) {
                let r;
                return (
                    (r = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(t)
                            : e.components || t
                        : l(e.components)),
                    n.createElement(s.Provider, { value: r }, e.children)
                );
            }
        },
    },
]);
