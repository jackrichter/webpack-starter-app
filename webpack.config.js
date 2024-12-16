const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	entry: {
		bundle: path.resolve(__dirname, "src/index.js") // Prepared for multiple entry points
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name][contenthash].js", // Will use the name 'bundle' with unique hash number
		clean: true // Prevent multiple bundle files adding up every time we add something and build again
	},
	devtool: "source-map", // Helps in debugging
	devServer: {
		static: {
			directory: path.resolve(__dirname, "dist")
		},
		port: 3000,
		open: true,
		hot: true,
		compress: true,
		historyApiFallback: true
	},
	module: {
		// Loaders
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"]
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Webpack App",
			filename: "index.html",
			template: "src/template.html",
			favicon: "src/android-chrome-192x192.png"
		})
	]
};
