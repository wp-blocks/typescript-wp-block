const path = require('path');

const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
	...defaultConfig,
	entry: {
		boilerplate: path.resolve(process.cwd(), `src/index.tsx`),
	},
};
