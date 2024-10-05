// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "sdk.min.js",
		path: path.resolve(__dirname, "dist"),
		library: "BrowserSDK",
		libraryTarget: "umd",
	},
	mode: "production",
};
