// Import the default config file and expose it in the project root.
// Useful for editor integrations.
const prettierConfig = require( '@wordpress/prettier-config' );

module.exports = {
	...prettierConfig,
	proseWrap: 'never',
	endOfLine: 'lf',
	overrides: [
		{
			files: '*.{yml,yaml}',
			options: {
				singleQuote: false,
				tabWidth: 2,
			},
		},
	],
};
