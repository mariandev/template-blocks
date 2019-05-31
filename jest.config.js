module.exports = {
	"roots": [
		"<rootDir>/src"
	],
	"transform": {
		"^.+\\.tsx?$": "ts-jest"
	},
	"collectCoverage": true,
	collectCoverageFrom: [
		"./src/**/*.ts",
		"!./src/**/index.ts",
	]
};