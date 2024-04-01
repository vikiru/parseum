'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [431],
    {
        7249: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => c,
                    contentTitle: () => a,
                    default: () => u,
                    frontMatter: () => r,
                    metadata: () => o,
                    toc: () => d,
                });
            var s = n(4848),
                i = n(8453);
            const r = { title: 'Task List' },
                a = void 0,
                o = {
                    id: 'taskList',
                    title: 'Task List',
                    description: 'Overview',
                    source: '@site/docs/taskList.md',
                    sourceDirName: '.',
                    slug: '/taskList',
                    permalink: '/parseum/taskList',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Task List' },
                    sidebar: 'docs',
                    previous: { title: 'Definition List', permalink: '/parseum/definitionList' },
                    next: { title: 'Strikethrough', permalink: '/parseum/strikethrough' },
                },
                c = {},
                d = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function l(e) {
                const t = {
                    code: 'code',
                    h2: 'h2',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, i.R)(),
                    ...e.components,
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, s.jsxs)(t.p, {
                            children: [
                                'A ',
                                (0, s.jsx)(t.strong, { children: 'task list' }),
                                ' is an element typically used to create a list of tasks, each with a status denoted by the presence of a checkbox which can be either checked or unchecked.',
                            ],
                        }),
                        '\n',
                        (0, s.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-text',
                                children:
                                    '- [ ] Finish writing documentation for Parseum\r\n- [x] Finish Parseum Backend and Frontend\n',
                            }),
                        }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-html',
                                children:
                                    '<ul>\r\n    <li><input type="checkbox" disabled />Finish writing documentation for Parseum</li>\r\n    <li><input type="checkbox" checked disabled />Finish Markdown Parser and Editor Backend and Frontend</li>\r\n</ul>\n',
                            }),
                        }),
                    ],
                });
            }
            function u(e = {}) {
                const { wrapper: t } = { ...(0, i.R)(), ...e.components };
                return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => a, x: () => o });
            var s = n(6540);
            const i = {},
                r = s.createContext(i);
            function a(e) {
                const t = s.useContext(r);
                return s.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function o(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(i)
                            : e.components || i
                        : a(e.components)),
                    s.createElement(r.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
