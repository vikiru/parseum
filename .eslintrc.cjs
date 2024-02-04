module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'prettier',
        'plugin:prettier/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:node/recommended',
        'plugin:jsdoc/recommended',
        'plugin:tailwindcss/recommended',
        'plugin:@peggyjs/recommended'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'grammar.pegjs'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module', ecmaFeatures: { jsx: true } },
    settings: { react: { version: '18.2' } },
    plugins: ['react-refresh', 'prettier', 'import', 'node', 'jsdoc', 'tailwindcss', 'comment-length', 'sort-exports'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'prettier/prettier': 'off',
    },
};
