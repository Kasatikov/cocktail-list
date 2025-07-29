import path from 'path';
import webpack, { WebpackPluginInstance } from 'webpack';
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const getPlugins = () => {
    const plugins: WebpackPluginInstance[] = [
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new webpack.DefinePlugin({
            VERSION_DATE_BUILD: `${Date.now()}`,
        }),
    ];

    return {
        plugins,
    };
};

const getRules = (isProduction: boolean) => {
    const rules = [
        {
            test: /\.scss$/,
            use: [
                isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.ts$/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            ],
            exclude: /node_modules/,
        },
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                    },
                },
            ],
        },
    ];

    return {
        rules,
    };
};

const devServer = () => {
    return {
        devServer: {
            static: {
                directory: path.join(__dirname, 'dist'),
            },
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            allowedHosts: ['localhost'],
            hot: true,
            port: 3000,
            historyApiFallback: true,
        },
    };
};

module.exports = (_env: unknown, argv: { mode: string }): webpack.Configuration => {
    const isProduction = argv.mode === 'production';

    return {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? false : 'source-map',
        entry: {
            app: path.resolve(__dirname, 'src', 'index'),
        },
        target: 'web',
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss'],
        },
        output: {
            filename: '[name].js',
            chunkFilename: '[contenthash].js',
            assetModuleFilename: '[name].[contenthash][ext][query]',
            path: path.resolve(__dirname, 'dist'),
            publicPath: 'auto',
            clean: true,
        },
        ...getPlugins(),
        module: {
            ...getRules(isProduction),
        },
        ...devServer(),
    };
};
