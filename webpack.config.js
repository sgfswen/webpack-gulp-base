module.exports = {
    entry:[
        './src/main.js'
    ],
    output: {
        path: __dirname + '/dest/',
        publicPath: "/dest/",
        // filename: '[name].bundle.js'
        filename: 'index.js'
    },
    resolve:{},
    module: {
        loaders: [
            {
                test: /\.js$/,
                // loaders: ['babel-loader'],
                loader: 'babel',
                exclude: /node_modules/
                // include: __dirname + '/src/'
            }
            // { test: /\.jsx?$/, loaders: ['babel','jsx?harmony']}
        ]
    },
    plugins:[]
};