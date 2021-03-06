const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

console.log('isProduction', isProduction)

const config = {
    entry: {
        index: './src/index.ts',
        //js_file: './src/js_file.js',
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        fallback: { path: require.resolve('path-browserify') },
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        port: 8881,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: 'Development',
            filename: 'index.html',
            template: `${path.resolve(__dirname, 'src')}/index.html`,
            favicon: `${path.resolve(__dirname, 'src')}/favicon.ico`,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css|.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            // {
            //     test: /\.html$/i,
            //     loader: 'html-loader',
            //     options: {
            //         minimize: {
            //             removeComments: false,
            //             collapseWhitespace: false,
            //         },
            //     },
            // },
        ],
    },
}

module.exports = () => {
    if (isProduction) {
        config.mode = 'producton'
    } else {
        config.mode = 'development'
    }
    return config
}
