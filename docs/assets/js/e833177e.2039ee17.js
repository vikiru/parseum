'use strict';
(self.webpackChunkparseum_docs = self.webpackChunkparseum_docs || []).push([
    [734],
    {
        7862: (e, n, s) => {
            s.r(n),
                s.d(n, {
                    assets: () => c,
                    contentTitle: () => l,
                    default: () => p,
                    frontMatter: () => i,
                    metadata: () => a,
                    toc: () => o,
                });
            var t = s(4848),
                r = s(8453);
            const i = { title: '\ud83d\udcdc Available Scripts' },
                l = void 0,
                a = {
                    id: 'scripts',
                    title: '\ud83d\udcdc Available Scripts',
                    description: '\ud83d\udcdc Available Scripts',
                    source: '@site/docs/scripts.md',
                    sourceDirName: '.',
                    slug: '/scripts',
                    permalink: '/parseum/scripts',
                    draft: !1,
                    unlisted: !1,
                    tags: [],
                    version: 'current',
                    frontMatter: { title: '\ud83d\udcdc Available Scripts' },
                    sidebar: 'docs',
                    previous: { title: '\ud83d\udee0\ufe0f Tech Stack', permalink: '/parseum/stack' },
                    next: { title: '\ud83d\udcdd Syntax Overview', permalink: '/parseum/syntax' },
                },
                c = {},
                o = [{ value: '\ud83d\udcdc Available Scripts', id: '-available-scripts', level: 2 }];
            function d(e) {
                const n = {
                    a: 'a',
                    code: 'code',
                    h2: 'h2',
                    li: 'li',
                    ol: 'ol',
                    pre: 'pre',
                    ...(0, r.R)(),
                    ...e.components,
                };
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsx)(n.h2, { id: '-available-scripts', children: '\ud83d\udcdc Available Scripts' }),
                        '\n',
                        (0, t.jsxs)(n.ol, {
                            children: [
                                '\n',
                                (0, t.jsx)(n.li, { children: 'Start the app in the development environment.' }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, t.jsx)(n.pre, {
                            children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'npm run start\n' }),
                        }),
                        '\n',
                        (0, t.jsxs)(n.ol, {
                            start: '2',
                            children: [
                                '\n',
                                (0, t.jsx)(n.li, { children: 'Build the project files and optimize for production.' }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, t.jsx)(n.pre, {
                            children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'npm run build\n' }),
                        }),
                        '\n',
                        (0, t.jsxs)(n.ol, {
                            start: '3',
                            children: [
                                '\n',
                                (0, t.jsxs)(n.li, {
                                    children: [
                                        'Lint all files and check if there are any issues, with ',
                                        (0, t.jsx)(n.a, { href: 'https://eslint.org/', children: 'ESLint' }),
                                        '.',
                                    ],
                                }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, t.jsx)(n.pre, {
                            children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'npm run lint\n' }),
                        }),
                        '\n',
                        (0, t.jsxs)(n.ol, {
                            start: '4',
                            children: [
                                '\n',
                                (0, t.jsxs)(n.li, {
                                    children: [
                                        'Fix all ESLint issues then format the files with ',
                                        (0, t.jsx)(n.a, { href: 'https://prettier.io/', children: 'Prettier' }),
                                        '.',
                                    ],
                                }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, t.jsx)(n.pre, {
                            children: (0, t.jsx)(n.code, {
                                className: 'language-bash',
                                children: 'npm run prettier\n',
                            }),
                        }),
                        '\n',
                        (0, t.jsxs)(n.ol, {
                            start: '5',
                            children: [
                                '\n',
                                (0, t.jsxs)(n.li, {
                                    children: [
                                        'Generate a parser using the defined ',
                                        (0, t.jsx)(n.code, { children: 'grammar.pegjs' }),
                                        ' file with ',
                                        (0, t.jsx)(n.a, { href: 'https://peggyjs.org/', children: 'Peggy.js' }),
                                        '.',
                                    ],
                                }),
                                '\n',
                            ],
                        }),
                        '\n',
                        (0, t.jsx)(n.pre, {
                            children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'npm run parser\n' }),
                        }),
                        '\n',
                        (0, t.jsxs)(n.ol, {
                            start: '6',
                            children: ['\n', (0, t.jsx)(n.li, { children: 'Run all tests.' }), '\n'],
                        }),
                        '\n',
                        (0, t.jsx)(n.pre, {
                            children: (0, t.jsx)(n.code, { className: 'language-bash', children: 'npm test\n' }),
                        }),
                    ],
                });
            }
            function p(e = {}) {
                const { wrapper: n } = { ...(0, r.R)(), ...e.components };
                return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
            }
        },
        8453: (e, n, s) => {
            s.d(n, { R: () => l, x: () => a });
            var t = s(6540);
            const r = {},
                i = t.createContext(r);
            function l(e) {
                const n = t.useContext(i);
                return t.useMemo(
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
                            ? e.components(r)
                            : e.components || r
                        : l(e.components)),
                    t.createElement(i.Provider, { value: n }, e.children)
                );
            }
        },
    },
]);
