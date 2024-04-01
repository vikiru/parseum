'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [229],
    {
        5089: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => c,
                    contentTitle: () => o,
                    default: () => u,
                    frontMatter: () => i,
                    metadata: () => a,
                    toc: () => l,
                });
            var s = n(4848),
                r = n(8453);
            const i = { title: 'Strikethrough' },
                o = void 0,
                a = {
                    id: 'strikethrough',
                    title: 'Strikethrough',
                    description: 'Overview',
                    source: '@site/docs/strikethrough.md',
                    sourceDirName: '.',
                    slug: '/strikethrough',
                    permalink: '/parseum/strikethrough',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: 'Strikethrough' },
                    sidebar: 'docs',
                    previous: { title: 'Task List', permalink: '/parseum/taskList' },
                    next: { title: 'Subscript', permalink: '/parseum/subscript' },
                },
                c = {},
                l = [
                    { value: 'Overview', id: 'overview', level: 2 },
                    { value: 'Example Syntax', id: 'example-syntax', level: 2 },
                ];
            function d(e) {
                const t = {
                    code: 'code',
                    h2: 'h2',
                    p: 'p',
                    pre: 'pre',
                    strong: 'strong',
                    ...(0, r.R)(),
                    ...e.components,
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(t.h2, { id: 'overview', children: 'Overview' }),
                        '\n',
                        (0, s.jsxs)(t.p, {
                            children: [
                                (0, s.jsx)(t.strong, { children: 'Strikethrough' }),
                                ' is one of the many formatting options available within Markdown. It is typically used to denote a selection of text that should be deleted or crossed out. It is indicated by wrapping the desired text with ',
                                (0, s.jsx)(t.code, { children: '~~' }),
                                '.',
                            ],
                        }),
                        '\n',
                        (0, s.jsx)(t.h2, { id: 'example-syntax', children: 'Example Syntax' }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-text',
                                children: '~~~This text is using strikethrough~~ and this text is not.\n',
                            }),
                        }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, {
                                className: 'language-html',
                                children: '<p><del>~This text is using strikethrough</del> and this text is not.</p>\n',
                            }),
                        }),
                    ],
                });
            }
            function u(e = {}) {
                const { wrapper: t } = { ...(0, r.R)(), ...e.components };
                return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => o, x: () => a });
            var s = n(6540);
            const r = {},
                i = s.createContext(r);
            function o(e) {
                const t = s.useContext(i);
                return s.useMemo(
                    function () {
                        return 'function' == typeof e ? e(t) : { ...t, ...e };
                    },
                    [t, e],
                );
            }
            function a(e) {
                let t;
                return (
                    (t = e.disableParentContext
                        ? 'function' == typeof e.components
                            ? e.components(r)
                            : e.components || r
                        : o(e.components)),
                    s.createElement(i.Provider, { value: t }, e.children)
                );
            }
        },
    },
]);
