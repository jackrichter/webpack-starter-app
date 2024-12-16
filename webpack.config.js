const path = require("path");

module.exports = {
	mode: "development",
	entry: {
		bundle: path.resolve(__dirname, "src/index.js") // Prepared for code splitting
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js" // Will use the name 'bundle'
	}
};
