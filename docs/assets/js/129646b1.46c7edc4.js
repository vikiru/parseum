'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [502],
    {
        6943: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => a,
                    contentTitle: () => s,
                    default: () => h,
                    frontMatter: () => l,
                    metadata: () => r,
                    toc: () => c,
                });
            var o = n(4848),
                i = n(8453);
            const l = { title: 'Blockquote' },
                s = void 0,
                r = {
                    id: 'blockquote',
                    title: 'Blockquote',
                    description: 'Overview',
                    source: '@site/docs/blockquote.md',
                    sourceDirName: '.',
                    slug: '/blockquote',
                    permalink: '/parseum/blockquote',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Blockquote' },
                    sidebar: 'docs',
                    previous: { title: 'Autolink', permalink: '/parseum/autoLink' },
                    next: { title: 'Code Block', permalink: '/parseum/codeBlock' },
                },
                a = {},
                c = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                    { value: 'Paragraph within Blockquote', id: 'paragraph-within-blockquote', level: 3 },
                    { value: 'Lists within Blockquote', id: 'lists-within-blockquote', level: 3 },
                    { value: 'Two Separate Blockquotes', id: 'two-separate-blockquotes', level: 3 },
                ];
            function u(e) {
                const t = {
                    code: 'code',
                    h2: 'h2',
                    h3: 'h3',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, i.R)(),
                    ...e.components,
                };
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, o.jsxs)(t.p, {
                            children: [
                                'A ',
                                (0, o.jsx)(t.strong, { children: 'blockquote' }),
                                ' is an element which represents a section of text that is typically referenced from another source. The blockquote element is indicated using a ',
                                (0, o.jsx)(t.code, { children: '>' }),
                                ' followed by the content, subsequent lines can optionally include ',
                                (0, o.jsx)(t.code, { children: '>' }),
                                ' or not. To separate the blockquote from other elements, a new line is needed at the end.',
                            ],
                        }),
                        '\n',
                        (0, o.jsx)(t.p, {
                            children: 'At present, it is possible to include a paragraph and lists within blockquotes.',
                        }),
                        '\n',
                        (0, o.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, o.jsx)(t.h3, {
                            id: 'paragraph-within-blockquote',
                            children: 'Paragraph within Blockquote',
                        }),
                        '\n',
                        (0, o.jsx)(t.pre, {
                            children: (0, o.jsx)(t.code, {
                                className: 'language-text',
                                children: '> This is a paragraph within a blockquote.\n',
                            }),
                        }),
                        '\n',
                        (0, o.jsx)(t.pre, {
                            children: (0, o.jsx)(t.code, {
                                className: 'language-html',
                                children:
                                    '<blockquote>\r\n    <p>This is a paragraph within a blockquote.</p>\r\n</blockquote>\n',
                            }),
                        }),
                        '\n',
                        (0, o.jsx)(t.h3, { id: 'lists-within-blockquote', children: 'Lists within Blockquote' }),
                        '\n',
                        (0, o.jsx)(t.pre, {
                            children: (0, o.jsx)(t.code, {
                                className: 'language-text',
                                children:
                                    '> 1. This is a list item within a blockquote.\r\n> 2. This is another list item within a blockquote.\n',
                            }),
                        }),
                        '\n',
                        (0, o.jsx)(t.pre, {
                            children: (0, o.jsx)(t.code, {
                                className: 'language-html',
                                children:
                                    '<blockquote>\r\n    <ol>\r\n        <li>This is a list item within a blockquote.</li>\r\n        <li>This is another list item within a blockquote.</li>\r\n    </ol>\r\n</blockquote>\n',
                            }),
                        }),
                        '\n',
                        (0, o.jsx)(t.h3, { id: 'two-separate-blockquotes', children: 'Two Separate Blockquotes' }),
                        '\n',
                        (0, o.jsx)(t.pre, {
                            children: (0, o.jsx)(t.code, {
                                className: 'language-text',
                                children: '> This is quote number 1\r\n\r\n> This is quote number 2\n',
                            }),
                        }),
                        '\n',
                        (0, o.jsx)(t.pre, {
                            children: (0, o.jsx)(t.code, {
                                className: 'language-html',
                                children:
                                    '<blockquote>\r\n    <p>This is quote number 1</p>\r\n</blockquote>\r\n<blockquote>\r\n    <p>This is quote number 2</p>\r\n</blockquote>\n',
                            }),
                        }),
                    ],
                });
            }
            function h(e = {}) {
                const { wrapper: t } = { ...(0, i.R)(), ...e.components };
                return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => s, x: () => r });
            var o = n(6540);
            const i = {},
                l = o.createContext(i);
            function s(e) {
                const t = o.useContext(l);
                return o.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function r(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(i)
                            : e.components || i
                        : s(e.components)),
                    o.createElement(l.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
