'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [960],
    {
        1485: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => d,
                    contentTitle: () => o,
                    default: () => u,
                    frontMatter: () => r,
                    metadata: () => c,
                    toc: () => l,
                });
            var i = n(4848),
                s = n(8453);
            const r = { title: 'Definition List' },
                o = void 0,
                c = {
                    id: 'definitionList',
                    title: 'Definition List',
                    description: 'Overview',
                    source: '@site/docs/definitionList.md',
                    sourceDirName: '.',
                    slug: '/definitionList',
                    permalink: '/parseum/definitionList',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Definition List' },
                    sidebar: 'docs',
                    previous: { title: 'Code Block', permalink: '/parseum/codeBlock' },
                    next: { title: 'Task List', permalink: '/parseum/taskList' },
                },
                d = {},
                l = [
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
                    ...(0, s.R)(),
                    ...e.components,
                };
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, i.jsxs)(t.p, {
                            children: [
                                'A ',
                                (0, i.jsx)(t.strong, { children: 'definition list' }),
                                ' is an element which allows for the creation of lists of terms followed by their definitions.',
                            ],
                        }),
                        '\n',
                        (0, i.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, i.jsx)(t.pre, {
                            children: (0, i.jsx)(t.code, {
                                className: 'language-text',
                                children: 'First Term\r\n: This is the definition of the first term.\n',
                            }),
                        }),
                        '\n',
                        (0, i.jsx)(t.pre, {
                            children: (0, i.jsx)(t.code, {
                                className: 'language-html',
                                children:
                                    '<dl>\r\n    <dt>First Term</dt>\r\n    <dd>This is the definition of the first term.</dd>\r\n</dl>\n',
                            }),
                        }),
                    ],
                });
            }
            function u(e = {}) {
                const { wrapper: t } = { ...(0, s.R)(), ...e.components };
                return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(a, { ...e }) }) : a(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => o, x: () => c });
            var i = n(6540);
            const s = {},
                r = i.createContext(s);
            function o(e) {
                const t = i.useContext(r);
                return i.useMemo(
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
                            ? e.components(s)
                            : e.components || s
                        : o(e.components)),
                    i.createElement(r.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
