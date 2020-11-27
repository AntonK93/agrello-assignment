module.exports = {
    root: true,

    env: {
        node: true,
    },

    parserOptions: {
        parser: '@typescript-eslint/parser',
    },

    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'linebreak-style': 'off',
        'no-plusplus': 'off',
        'no-prototype-builtins': 'off',
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/no-cycle': 'off',
        'prefer-object-spread': 'off',
        'object-shorthand': 'off',
    },

    'extends': [
      'plugin:vue/essential',
      '@vue/typescript'
    ]
};
