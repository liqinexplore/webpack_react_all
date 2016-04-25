/**
 * Created by Administrator on 2016/4/6.
 */
var path=require('path');
var webpack =require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports={
    resolve:{
        root:[
            path.resolve('./app/_global/components')
        ],
        extensions:['','.js','.jsx']
    },
    entry:[
        path.resolve(__dirname, './app/main.js')
    ],
    output:{
        path: __dirname + '/build',
        filename: 'bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module:{
        loaders:[{
            test:/.jsx?$/,
            loader:'babel-loader',
            exclude:/node_modules/,
            query:{
                presets:['es2015','react']
            }
        },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.less$/,loader: 'style!css!less'},
            {test: /\.(png|jpg)$/, loader: 'url?limit=25000'}


        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};