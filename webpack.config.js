const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
    return {
        mode: "development",
        entry: "./src/index.jsx",
        output: {
            filename: "[name].js",
            path: __dirname + "/dist"
        },
        
        resolve: {
            extensions: [".jsx", ".js", ".json"]
        },

        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    use: [
                        "babel-loader",
                        "linaria/loader"
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        "css-loader"
                    ]
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                template: "src/index.html"
            })
        ]
    };
};
