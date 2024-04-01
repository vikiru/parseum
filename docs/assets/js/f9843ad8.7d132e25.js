'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [352],
    {
        6131: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => o,
                    contentTitle: () => s,
                    default: () => p,
                    frontMatter: () => r,
                    metadata: () => l,
                    toc: () => c,
                });
            var a = n(4848),
                i = n(8453);
            const r = { title: 'Image' },
                s = void 0,
                l = {
                    id: 'image',
                    title: 'Image',
                    description: 'Overview',
                    source: '@site/docs/image.md',
                    sourceDirName: '.',
                    slug: '/image',
                    permalink: '/parseum/image',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Image' },
                    sidebar: 'docs',
                    previous: { title: 'Link', permalink: '/parseum/link' },
                    next: { title: 'Italic', permalink: '/parseum/italic' },
                },
                o = {},
                c = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function m(e) {
                const t = {
                    code: 'code',
                    h2: 'h2',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, i.R)(),
                    ...e.components,
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, a.jsxs)(t.p, {
                            children: [
                                'An ',
                                (0, a.jsx)(t.strong, { children: 'image' }),
                                ' is an element that can visually enhance text by embedding an image into the document. The image element can additionally have an optional title attribute.',
                            ],
                        }),
                        '\n',
                        (0, a.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, a.jsx)(t.pre, {
                            children: (0, a.jsx)(t.code, {
                                className: 'language-text',
                                children:
                                    '![image](https://example.com)\r\n\r\n![image](https://example.com "This is a image title")\n',
                            }),
                        }),
                        '\n',
                        (0, a.jsx)(t.pre, {
                            children: (0, a.jsx)(t.code, {
                                className: 'language-html',
                                children:
                                    '<p>\r\n    <img src="https://example.com" alt="image" />\r\n</p>\r\n<p>\r\n    <img src="https://example.com" alt="image" title="This is a image title" />\r\n</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: t } = { ...(0, i.R)(), ...e.components };
                return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(m, { ...e }) }) : m(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => s, x: () => l });
            var a = n(6540);
            const i = {},
                r = a.createContext(i);
            function s(e) {
                const t = a.useContext(r);
                return a.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function l(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(i)
                            : e.components || i
                        : s(e.components)),
                    a.createElement(r.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
