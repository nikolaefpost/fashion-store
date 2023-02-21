const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: '/dist/'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '.'),
        },
        compress: true,
        port: 3000,
        open: true,
        hot: true
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "main.css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                     MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        // options: {
                        //     url: false,
                        // },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["postcss-preset-env"]
                                ]
                            }
                        }
                    },
                    "sass-loader",
                ],
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', ".css", ".scss"],
    },
}

module.exports = (env, options) => {

    conf.mode = options.mode || "development"
    let isProd = options.mode === "production";
    conf.devtool = isProd ? false : 'eval-cheap-module-source-map';
    return conf;
}