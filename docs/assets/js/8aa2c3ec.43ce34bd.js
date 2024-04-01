'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [165],
    {
        8736: (a, e, r) => {
            r.r(e),
                r.d(e, {
                    assets: () => l,
                    contentTitle: () => t,
                    default: () => d,
                    frontMatter: () => i,
                    metadata: () => o,
                    toc: () => h,
                });
            var n = r(4848),
                s = r(8453);
            const i = { title: 'Paragraph' },
                t = void 0,
                o = {
                    id: 'paragraph',
                    title: 'Paragraph',
                    description: 'Overview',
                    source: '@site/docs/paragraph.md',
                    sourceDirName: '.',
                    slug: '/paragraph',
                    permalink: '/parseum/paragraph',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Paragraph' },
                    sidebar: 'docs',
                    previous: { title: '\ud83d\udcdd Syntax Overview', permalink: '/parseum/syntax' },
                    next: { title: 'Header', permalink: '/parseum/header' },
                },
                l = {},
                h = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                    { value: 'Normal Paragraph', id: 'normal-paragraph', level: 3 },
                    { value: 'Paragraph with Formatting', id: 'paragraph-with-formatting', level: 3 },
                    { value: 'Paragraphs - Soft vs. Hard Break', id: 'paragraphs---soft-vs-hard-break', level: 3 },
                    { value: 'Soft Break', id: 'soft-break', level: 4 },
                    { value: 'Hard Break', id: 'hard-break', level: 4 },
                ];
            function p(a) {
                const e = {
                    code: 'code',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, s.R)(),
                    ...a.components,
                };
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(e.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, n.jsxs)(e.p, {
                            children: [
                                'A ',
                                (0, n.jsx)(e.strong, { children: 'paragraph' }),
                                ' is a block of text that can include formatting options such as ',
                                (0, n.jsx)(e.code, { children: 'bold' }),
                                ', ',
                                (0, n.jsx)(e.code, { children: 'italic' }),
                                ', ',
                                (0, n.jsx)(e.code, { children: 'link' }),
                                ', etc.',
                            ],
                        }),
                        '\n',
                        (0, n.jsxs)(e.p, {
                            children: [
                                'Paragraphs can additionally use something known as ',
                                (0, n.jsx)(e.strong, { children: 'hard break' }),
                                ' and ',
                                (0, n.jsx)(e.strong, { children: 'soft break' }),
                                ' which is used to determine how a paragraph should be rendered under certain conditions.',
                            ],
                        }),
                        '\n',
                        (0, n.jsx)(e.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, n.jsx)(e.h3, { id: 'normal-paragraph', children: 'Normal Paragraph' }),
                        '\n',
                        (0, n.jsx)(e.pre, {
                            children: (0, n.jsx)(e.code, {
                                className: 'language-text',
                                children: 'This is a simple paragraph.\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(e.pre, {
                            children: (0, n.jsx)(e.code, {
                                className: 'language-html',
                                children: '<p>This is a simple paragraph.</p>\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(e.h3, { id: 'paragraph-with-formatting', children: 'Paragraph with Formatting' }),
                        '\n',
                        (0, n.jsx)(e.pre, {
                            children: (0, n.jsx)(e.code, {
                                className: 'language-text',
                                children:
                                    'This is a paragraph with *formatting* options such as `bold`, `code`.\r\n\r\nAdditionally, you can also use links such as [link](google.com).\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(e.pre, {
                            children: (0, n.jsx)(e.code, {
                                className: 'language-html',
                                children:
                                    '<p>This is a paragraph with <em>formatting</em> options such as <code>bold</code>, <code>code</code>.</p>\r\n<p>Additionally, you can also use links such as <a href="google.com">link</a>.</p>\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(e.h3, {
                            id: 'paragraphs---soft-vs-hard-break',
                            children: 'Paragraphs - Soft vs. Hard Break',
                        }),
                        '\n',
                        (0, n.jsx)(e.h4, { id: 'soft-break', children: 'Soft Break' }),
                        '\n',
                        (0, n.jsx)(e.pre, {
                            children: (0, n.jsx)(e.code, {
                                className: 'language-text',
                                children: 'This is paragraph 1.\r\nAnd this is a continuation of paragraph 1.\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(e.pre, {
                            children: (0, n.jsx)(e.code, {
                                className: 'language-html',
                                children:
                                    '<p>This is paragraph 1.<br />And this is a continuation of paragraph 1.</p>\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(e.h4, { id: 'hard-break', children: 'Hard Break' }),
                        '\n',
                        (0, n.jsx)(e.pre, {
                            children: (0, n.jsx)(e.code, {
                                className: 'language-text',
                                children: 'This is paragraph 1.\r\n\r\nThis is paragraph 2.\n',
                            }),
                        }),
                        '\n',
                        (0, n.jsx)(e.pre, {
                            children: (0, n.jsx)(e.code, {
                                className: 'language-html',
                                children: '<p>This is paragraph 1.</p>\r\n<p>This is paragraph 2.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function d(a = {}) {
                const { wrapper: e } = { ...(0, s.R)(), ...a.components };
                return e ? (0, n.jsx)(e, { ...a, children: (0, n.jsx)(p, { ...a }) }) : p(a);
            }
        },
        8453: (a, e, r) => {
            r.d(e, { R: () => t, x: () => o });
            var n = r(6540);
            const s = {},
                i = n.createContext(s);
            function t(a) {
                const e = n.useContext(i);
                return n.useMemo(
                    function () {
                        return 'function' == typeof a ? a(e) : { ...e, ...a };
                    },
                    [e, a],
                );
            }
            function o(a) {
                let e;
                return (
                    (e = a.disableParentContext
                        ? 'function' == typeof a.components
                            ? a.components(s)
                            : a.components || s
                        : t(a.components)),
                    n.createElement(i.Provider, { value: e }, a.children)
                );
            }
        },
    },
]);
