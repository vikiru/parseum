'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [672],
    {
        2363: (e, n, i) => {
            i.r(n),
                i.d(n, {
                    assets: () => c,
                    contentTitle: () => l,
                    default: () => h,
                    frontMatter: () => r,
                    metadata: () => d,
                    toc: () => o,
                });
            var s = i(4848),
                t = i(8453);
            const r = { title: '\ud83c\udf1f Features' },
                l = void 0,
                d = {
                    id: 'features',
                    title: '\ud83c\udf1f Features',
                    description: '\ud83c\udf1f Features',
                    source: '@site/docs/features.md',
                    sourceDirName: '.',
                    slug: '/features',
                    permalink: '/parseum/features',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: '\ud83c\udf1f Features' },
                    sidebar: 'docs',
                    previous: { title: '\ud83d\udd0d Testing', permalink: '/parseum/test' },
                    next: { title: '\ud83d\udee0\ufe0f Tech Stack', permalink: '/parseum/stack' },
                },
                c = {},
                o = [
                    { value: '\ud83c\udf1f Features', id: '-features', level: 2 },
                    { value: 'Unsupported Markdown Syntax', id: 'unsupported-markdown-syntax', level: 3 },
                ];
            function a(e) {
                const n = {
                    a: 'a',
                    code: 'code',
                    h2: 'h2',
                    h3: 'h3',
                    li: 'li',
                    p: 'p',
                    ul: 'ul',
                    ...(0, t.R)(),
                    ...e.components,
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(n.h2, { id: '-features', children: '\ud83c\udf1f Features' }),
                        '\n',
                        (0, s.jsxs)(n.ul, {
                            children: [
                                '\n',
                                (0, s.jsxs)(n.li, {
                                    children: [
                                        'Parsing of simple markdown syntax such as:',
                                        '\n',
                                        (0, s.jsxs)(n.ul, {
                                            children: [
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'paragraph' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'header' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'horizontal rule' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'list' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'link' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'image' }),
                                                }),
                                                '\n',
                                                (0, s.jsxs)(n.li, {
                                                    children: [
                                                        'formatting such as ',
                                                        (0, s.jsx)(n.code, { children: 'italic' }),
                                                        ', ',
                                                        (0, s.jsx)(n.code, { children: 'bold' }),
                                                        ', ',
                                                        (0, s.jsx)(n.code, { children: 'bold italic' }),
                                                        ', ',
                                                        (0, s.jsx)(n.code, { children: 'code' }),
                                                        ', ',
                                                        (0, s.jsx)(n.code, { children: 'emphasis' }),
                                                    ],
                                                }),
                                                '\n',
                                            ],
                                        }),
                                        '\n',
                                    ],
                                }),
                                '\n',
                                (0, s.jsxs)(n.li, {
                                    children: [
                                        'Partial extended markdown syntax support such as:',
                                        '\n',
                                        (0, s.jsxs)(n.ul, {
                                            children: [
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, {
                                                        children: 'alternate header syntax',
                                                    }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'blockquotes' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'code block' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'comments' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'definition list' }),
                                                }),
                                                '\n',
                                                (0, s.jsx)(n.li, {
                                                    children: (0, s.jsx)(n.code, { children: 'task list' }),
                                                }),
                                                '\n',
                                                (0, s.jsxs)(n.li, {
                                                    children: [
                                                        'additional formatting syntax such as ',
                                                        (0, s.jsx)(n.code, { children: 'subscript' }),
                                                        ',',
                                                        (0, s.jsx)(n.code, { children: 'superscript' }),
                                                        ', ',
                                                        (0, s.jsx)(n.code, { children: 'strikethrough' }),
                                                        ', ',
                                                        (0, s.jsx)(n.code, { children: 'highlight' }),
                                                        ', etc',
                                                    ],
                                                }),
                                                '\n',
                                            ],
                                        }),
                                        '\n',
                                    ],
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children:
                                        'Simple UI for a markdown editor allowing a user to enter markdown and view resulting html rendered in a side-by-side view',
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: 'Ability to save and clear markdown content to and from local storage',
                                }),
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children:
                                        'Ability to grow and accomodate additional syntax by updating the defined grammar file',
                                }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, s.jsx)(n.h3, {
                            id: 'unsupported-markdown-syntax',
                            children: 'Unsupported Markdown Syntax',
                        }),
                        '\n',
                        (0, s.jsxs)(n.ul, {
                            children: [
                                '\n',
                                (0, s.jsx)(n.li, {
                                    children: 'Nested lists (and inclusion of other elements within lists)',
                                }),
                                '\n',
                                (0, s.jsx)(n.li, { children: 'Nested blockquotes (with different levels)' }),
                                '\n',
                                (0, s.jsx)(n.li, { children: 'Tables' }),
                                '\n',
                                (0, s.jsx)(n.li, { children: 'Footnotes' }),
                                '\n',
                                (0, s.jsx)(n.li, { children: 'Reference Links' }),
                                '\n',
                                (0, s.jsxs)(n.li, {
                                    children: [
                                        'Emoji Support (currently pasting emojis is supported, but for example ',
                                        (0, s.jsx)(n.code, { children: ':joy:' }),
                                        ' does not return an emoji with its resulting unicode representation)',
                                    ],
                                }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, s.jsxs)(n.p, {
                            children: [
                                'A comprehensive overview detailing all supported Markdown syntax can be located within the documentation under the ',
                                (0, s.jsx)(n.a, { href: '/syntax', children: 'Syntax Overview' }),
                                ' section. Each element has a dedicated page detailing an overview of what the element is and example input Markdown and resulting output HTML.',
                            ],
                        }),
                    ],
                });
            }
            function h(e = {}) {
                const { wrapper: n } = { ...(0, t.R)(), ...e.components };
                return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
            }
        },
        8453: (e, n, i) => {
            i.d(n, { R: () => l, x: () => d });
            var s = i(6540);
            const t = {},
                r = s.createContext(t);
            function l(e) {
                const n = s.useContext(r);
                return s.useMemo(
                    function () {
                        return 'function' == typeof e ? e(n) : { ...n, ...e };
                    },
                    [n, e],
                );
            }
            function d(e) {
                let n;
                return (
                    (n = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(t)
                            : e.components || t
                        : l(e.components)),
                    s.createElement(r.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
