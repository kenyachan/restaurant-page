const { dirname } = require('path');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
		contact: './src/contact.js',
		home: './src/home.js',
		menu: './src/menu.js',
		siteComponents: './src/site-components.js',
    },
    devtool: 'inline-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Restaurant Page',
		}),
	],
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
		clean: true,
    },
    module: {
      rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }, 
		{
			test: /\.(woff|woff2|eot|ttf|otf)$/i,
			type: 'asset/resource',
		},
      ], 
    },
}
