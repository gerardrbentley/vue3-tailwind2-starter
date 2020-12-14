module.exports = {
	root: true,
	parser: 'vue-eslint-parser',
	plugins: ['prettier', '@typescript-eslint', 'vue'],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
		extraFileExtensions: ['.vue'],
	},
	env: {
		node: true,
		browser: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		// 'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:vue/vue3-recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
		'prettier/vue',
		'prettier/@typescript-eslint',
	],
	rules: {
		quotes: [
			'warn',
			'single',
			{
				avoidEscape: true,
			},
		],
		'no-trailing-spaces': 'error',
		'prefer-arrow-callback': 'error',
		'eol-last': 'error',
		'prefer-const': 'error',
		'no-var': 'error',
		eqeqeq: 'error',
		'block-scoped-var': 'error',
		'prettier/prettier': 'error',
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
	overrides: [
		{
			files: ['**/*.spec.{j,t}s?(x)$'],
			env: {
				jest: true,
			},
		},
	],
};
