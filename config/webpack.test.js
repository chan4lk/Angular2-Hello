var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extentions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: 'null'
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: 'raw'
            }
        ]
    }

}