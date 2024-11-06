import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended'
import importPlugin from 'eslint-plugin-import'

export default tseslint
  .config(
    { ignores: ['dist'] },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended, importPlugin.flatConfigs.recommended],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      settings: {
        'import/resolver': {
          alias: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
          },
        },
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': 'off',
        'sort-imports': [
          'error',
          {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
            allowSeparatedGroups: false,
          },
        ],
        'import/no-dynamic-require': 'warn',
        'import/no-nodejs-modules': 'warn',
        'import/order': [
          'error',
          {
            'newlines-between': 'always',
            groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        '@typescript-eslint/ no-explicit-any': 0,
        'no-unused-vars': 'off',
      },
    },
  )
  .concat(eslintPluginPrettier)
