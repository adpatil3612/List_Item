let path = require("path");

module.exports = {
    entry: ['./src/App.js', 'semantic-ui-css/semantic.min.css', './style.less'],
    output:{
        path: __dirname,
        filename: 'app.js'
    },
    module: {
        rules:[{
            test: /\.jsx?$/,
            exclude: '/node_modules/',
            use:['babel-loader']
        },
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.html$/, loader: 'html-loader?caseSensitive=true' },
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        },{
            test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
            use: 'file-loader?name=[name].[ext]?[hash]'
        },
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
        },
        {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader'
        },
        {
            test: /\.otf(\?.*)?$/,
            use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
        }]
    },
    mode: 'development',
    devServer: {
        port: 8090,
        historyApiFallback: true,
        contentBase: __dirname

    },
    devtool: 'source-map'

}