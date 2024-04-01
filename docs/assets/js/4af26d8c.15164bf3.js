'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [295],
    {
        9820: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    assets: () => a,
                    contentTitle: () => o,
                    default: () => d,
                    frontMatter: () => i,
                    metadata: () => c,
                    toc: () => u,
                });
            var s = n(4848),
                r = n(8453);
            const i = { title: '\ud83d\udd0d Testing' },
                o = void 0,
                c = {
                    id: 'test',
                    title: '\ud83d\udd0d Testing',
                    description: '\ud83d\udd0d Testing',
                    source: '@site/docs/test.md',
                    sourceDirName: '.',
                    slug: '/test',
                    permalink: '/parseum/test',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: '\ud83d\udd0d Testing' },
                    sidebar: 'docs',
                    previous: { title: '\u26a1 Setup', permalink: '/parseum/setup' },
                    next: { title: '\ud83c\udf1f Features', permalink: '/parseum/features' },
                },
                a = {},
                u = [{ value: '\ud83d\udd0d Testing', id: '-testing', level: 2 }];
            function p(e) {
                const t = {
                    a: 'a',
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
                        (0, s.jsx)(t.h2, { id: '-testing', children: '\ud83d\udd0d Testing' }),
                        '\n',
                        (0, s.jsxs)(t.p, {
                            children: [
                                'The comprehensive suite of tests for this project is housed within the ',
                                (0, s.jsx)(t.strong, {
                                    children: (0, s.jsx)(t.a, {
                                        href: 'https://github.com/vikiru/parseum/test',
                                        children: 'test',
                                    }),
                                }),
                                ' directory. These tests are primarily designed to verify the functionality of the parser and ensure that the resulting HTML is as expected for the input Markdown.',
                            ],
                        }),
                        '\n',
                        (0, s.jsx)(t.p, { children: 'The tests can be run with the following command:' }),
                        '\n',
                        (0, s.jsx)(t.pre, {
                            children: (0, s.jsx)(t.code, { className: 'language-bash', children: 'npm test\n' }),
                        }),
                    ],
                });
            }
            function d(e = {}) {
                const { wrapper: t } = { ...(0, r.R)(), ...e.components };
                return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
            }
        },
        8453: (e, t, n) => {
            n.d(t, { R: () => o, x: () => c });
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
            function c(e) {
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
