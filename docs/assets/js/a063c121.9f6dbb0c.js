'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [910],
    {
        8076: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => l,
                    contentTitle: () => r,
                    default: () => p,
                    frontMatter: () => s,
                    metadata: () => c,
                    toc: () => d,
                });
            var o = n(4848),
                i = n(8453);
            const s = { title: 'Code Block' },
                r = void 0,
                c = {
                    id: 'codeBlock',
                    title: 'Code Block',
                    description: 'Overview',
                    source: '@site/docs/codeBlock.md',
                    sourceDirName: '.',
                    slug: '/codeBlock',
                    permalink: '/parseum/codeBlock',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Code Block' },
                    sidebar: 'docs',
                    previous: { title: 'Blockquote', permalink: '/parseum/blockquote' },
                    next: { title: 'Definition List', permalink: '/parseum/definitionList' },
                },
                l = {},
                d = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function a(e) {
                const t = {
                    code: 'code',
                    h2: 'h2',
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
                                (0, o.jsx)(t.strong, { children: 'code block' }),
                                ' is an element which is typically used to represent code and is similar to the inline code formatting option, except that it allows for multi-line content. This element is denoted by using ',
                                (0, o.jsx)(t.code, { children: '```' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, o.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, o.jsx)(t.pre, {
                            children: (0, o.jsx)(t.code, {
                                children:
                                    '\x3c!-- Ignore the `\\` present, this is simply used to escape the backticks. --\x3e\r\n\r\n\\```\r\nThis is text within a code block.\r\n\\```\n',
                            }),
                        }),
                        '\n',
                        (0, o.jsx)(t.pre, {
                            children: (0, o.jsx)(t.code, {
                                className: 'language-html',
                                children: '<pre>\r\n    <code>This is text within a code block.</code>\r\n</pre>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, i.R)(), ...e.components };
                return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => r, x: () => c });
            var o = n(6540);
            const i = {},
                s = o.createContext(i);
            function r(e) {
                const t = o.useContext(s);
                return o.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function c(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(i)
                            : e.components || i
                        : r(e.components)),
                    o.createElement(s.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
