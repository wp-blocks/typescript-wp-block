const jestConfig = {
	verbose: true,
	preset: '@wordpress/jest-preset-default',
	setupFilesAfterEnv: [
		'@wordpress/jest-console',
		'@wordpress/jest-puppeteer-axe',
		'expect-puppeteer',
		'puppeteer-testing-library/extend-expect',
	],
	modulePaths: [ '<rootDir>' ],
	projects: [
		{
			displayName: 'unit',
			testMatch: [ '<rootDir>/tests/unit/**/*.test.ts' ],
		},
		{
			displayName: 'e2e',
			preset: 'jest-puppeteer',
			testMatch: [ '<rootDir>/tests/e2e/**/*.test.ts' ],
		},
	],
};

module.exports = jestConfig;
