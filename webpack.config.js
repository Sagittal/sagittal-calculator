const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/app/index.ts',
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Sagittal Notator',
        }),
    ],
}
