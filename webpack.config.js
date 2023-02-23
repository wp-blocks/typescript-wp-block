const path = require( 'path' );

const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

module.exports = {
	...defaultConfig,
	entry: {
		boilerplate: path.resolve( process.cwd(), `src/index.tsx` ),
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.[tjmc]sx?$/,
				use: [ 'babel-loader' ],
				exclude: /node_modules/,
			},
		],
		...defaultConfig.module,
	},
};
