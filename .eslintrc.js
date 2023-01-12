/**
 * Set WordPress presets
 */

const eslintConfig = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
};

eslintConfig.parserOptions = {
	ecmaVersion: 6,
	env: {
    jest: true,
    es6: true
  },
	babelOptions: {
		presets: [
			'@wordpress/babel-preset-default',
			'@babel/preset-typescript',
		],
    globals: {
      page: true,
      browser: true,
      context: true,
      jestPuppeteer: true,
    },
	},
};

module.exports = eslintConfig;
