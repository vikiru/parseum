'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [905],
    {
        6744: (e, n, i) => {
            i.r(n),
                i.d(n, {
                    assets: () => c,
                    contentTitle: () => t,
                    default: () => h,
                    frontMatter: () => l,
                    metadata: () => a,
                    toc: () => d,
                });
            var r = i(4848),
                s = i(8453);
            const l = { title: '\ud83d\udcdd Syntax Overview' },
                t = void 0,
                a = {
                    id: 'syntax',
                    title: '\ud83d\udcdd Syntax Overview',
                    description: '\ud83d\udcdd Syntax Overview',
                    source: '@site/docs/syntax.md',
                    sourceDirName: '.',
                    slug: '/syntax',
                    permalink: '/parseum/syntax',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: '\ud83d\udcdd Syntax Overview' },
                    sidebar: 'docs',
                    previous: { title: '\ud83d\udcdc Available Scripts', permalink: '/parseum/scripts' },
                    next: { title: 'Paragraph', permalink: '/parseum/paragraph' },
                },
                c = {},
                d = [
                    { value: '\ud83d\udcdd Syntax Overview', id: '-syntax-overview', level: 2 },
                    { value: 'Basic Syntax', id: 'basic-syntax', level: 3 },
                    { value: 'Formatting Syntax', id: 'formatting-syntax', level: 3 },
                    { value: 'Extended Syntax', id: 'extended-syntax', level: 3 },
                    { value: 'Excluded Syntax', id: 'excluded-syntax', level: 3 },
                ];
            function x(e) {
                const n = { a: 'a', h2: 'h2', h3: 'h3', li: 'li', ul: 'ul', ...(0, s.R)(), ...e.components };
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(n.h2, { id: '-syntax-overview', children: '\ud83d\udcdd Syntax Overview' }),
                        '\n',
                        (0, r.jsxs)(n.ul, {
                            children: [
                                '\n',
                                (0, r.jsxs)(n.li, {
                                    children: [
                                        (0, r.jsx)(n.a, {
                                            href: '#-syntax-overview',
                                            children: '\ud83d\udcdd Syntax Overview',
                                        }),
                                        '\n',
                                        (0, r.jsxs)(n.ul, {
                                            children: [
                                                '\n',
                                                (0, r.jsx)(n.li, {
                                                    children: (0, r.jsx)(n.a, {
                                                        href: '#basic-syntax',
                                                        children: 'Basic Syntax',
                                                    }),
                                                }),
                                                '\n',
                                                (0, r.jsx)(n.li, {
                                                    children: (0, r.jsx)(n.a, {
                                                        href: '#formatting-syntax',
                                                        children: 'Formatting Syntax',
                                                    }),
                                                }),
                                                '\n',
                                                (0, r.jsx)(n.li, {
                                                    children: (0, r.jsx)(n.a, {
                                                        href: '#extended-syntax',
                                                        children: 'Extended Syntax',
                                                    }),
                                                }),
                                                '\n',
                                                (0, r.jsx)(n.li, {
                                                    children: (0, r.jsx)(n.a, {
                                                        href: '#excluded-syntax',
                                                        children: 'Excluded Syntax',
                                                    }),
                                                }),
                                                '\n',
                                            ],
                                        }),
                                        '\n',
                                    ],
                                }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, r.jsx)(n.h3, { id: 'basic-syntax', children: 'Basic Syntax' }),
                        '\n',
                        (0, r.jsxs)(n.ul, {
                            children: [
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/paragraph', children: 'Paragraph' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/header', children: 'Header' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/horizontalRule', children: 'Horizontal Rule' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/list', children: 'List' }) }),
                                '\n',
                                (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/link', children: 'Link' }) }),
                                '\n',
                                (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/image', children: 'Image' }) }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, r.jsx)(n.h3, { id: 'formatting-syntax', children: 'Formatting Syntax' }),
                        '\n',
                        (0, r.jsxs)(n.ul, {
                            children: [
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/italic', children: 'Italic' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/bold', children: 'Bold' }) }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/boldItalic', children: 'Bold Italic' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, { children: (0, r.jsx)(n.a, { href: '/code', children: 'Code' }) }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/emphasis', children: 'Emphasis' }),
                                }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, r.jsx)(n.h3, { id: 'extended-syntax', children: 'Extended Syntax' }),
                        '\n',
                        (0, r.jsxs)(n.ul, {
                            children: [
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/autoLink', children: 'Auto Link' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/blockquote', children: 'Blockquote' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/codeBlock', children: 'Code Block' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/definitionList', children: 'Definition List' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/taskList', children: 'Task List' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/strikethrough', children: 'Strikethrough' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/subscript', children: 'Subscript' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/superscript', children: 'Superscript' }),
                                }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, r.jsx)(n.h3, { id: 'excluded-syntax', children: 'Excluded Syntax' }),
                        '\n',
                        (0, r.jsxs)(n.ul, {
                            children: [
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/html', children: 'HTML Tags' }),
                                }),
                                '\n',
                                (0, r.jsx)(n.li, {
                                    children: (0, r.jsx)(n.a, { href: '/comment', children: 'Comment' }),
                                }),
                                '\n',
                            ],
                        }),
                    ],
                });
            }
            function h(e = {}) {
                const { wrapper: n } = { ...(0, s.R)(), ...e.components };
                return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(x, { ...e }) }) : x(e);
            }
        },
        8453: (e, n, i) => {
            i.d(n, { R: () => t, x: () => a });
            var r = i(6540);
            const s = {},
                l = r.createContext(s);
            function t(e) {
                const n = r.useContext(l);
                return r.useMemo(
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
                            ? e.components(s)
                            : e.components || s
                        : t(e.components)),
                    r.createElement(l.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
