const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: './src/index.js',

    output: {
        path: '/dist'
    },

    module:{
        rules:[
            {
                test : /.css$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ]
    },

    optimization:{
        minimize: true,
        minimizer:[
            new CssMinimizerPlugin(),
            new TerserPlugin({
                minify: TerserPlugin.uglifyJsMinify,
                terserOptions: {},
            })
        ]
    },

    plugins:[
        new MiniCssExtractPlugin()
    ]
}