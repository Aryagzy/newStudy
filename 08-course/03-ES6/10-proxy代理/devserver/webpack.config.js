const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    mode:'development',
    devtool:'cheap-module-eval-source-map',
    entry:{
        'main':'./src/index.js',
    },
    devServer:{
        contentBase:'./dist',
        open:true,
        hot:true,
        hotOnly:true,
        proxy:{
            '/api':{
                target:'http://127.0.0.1:2000',
                pathRewrite: {
                    // 如果你不希望传递api给后台 就需要重写
                    "name.json": "rName.json"
                }
            }
        }
    },
    module:{
        rules:[
            { test: /\.js$/,
              exclude: /node_modules/, 
              loader: "babel-loader" ,
            },
            {
                test:/\.jpg$/,
                use:{
                    loader:'url-loader',
                    options:{
                        name:'[name]_[hash].[ext]',
                        outputPath:"images/",
                        limit:10240
                    }
                }
            },
            {
                test:/\.(eot|ttf|svg|woff)$/,
                use:{
                    loader:'file-loader',
                }
            },
            {
                test:/\.scss$/,
                use:[
                    'style-loader',
                    {
                        loader:'css-loader',
                        options:{
                            importLoaders:2,
                            // modules:true
                        }
                    },
                    'sass-loader',
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }

        ]
    },
    output:{
        filename:'[name].js',
        path:path.resolve(__dirname,'dist')
    },
    plugins:[new HtmlWebpackPlugin({
        template:'src/index.html'
    }),new CleanWebpackPlugin({}),
    new webpack.HotModuleReplacementPlugin()
]
}