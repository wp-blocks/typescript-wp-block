/** @type {import("@babel/core").ConfigFunction} */
module.exports = ( api ) => {
	api.cache( true );

	return {
		presets: [
			'@babel/preset-typescript',
			'@wordpress/babel-preset-default',
		],
		plugins: [
			[
				'@wordpress/babel-plugin-makepot',
				{
					output: 'languages/search.pot',
				},
			],
		],
	};
};
