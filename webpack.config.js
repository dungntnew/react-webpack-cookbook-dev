/// <reference path="typings/node/node.d.ts"/>
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var path_to_react = path.resolve(node_modules, 'react/dist/react.js');

var config = {
    cache: true,
    entry: ['webpack/hot/dev-server', 
            path.resolve(__dirname, 'app/main.js')],
    resolve: {
      alias: {
          'react': path_to_react
      },
      extensions: ['', '.js', '.jsx'],
      modulesDirectories: ['node_modules', 'modules']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'http://localhost:8181/assets',
        filename: 'bundle.js',
    },
//    externals: {
//        'react': 'React'
//    },
    module: {
        loaders: [
         { test: /\.jsx?$/,       loader: 'babel'  },
         { test: /\.css$/,        loader: 'style!css' },
         { test: /\.less$/,       loader: 'style!css!less'  },
         { test: /\.scss$/,       loader: 'style!css!sass' }, 
         { test: /\.(png|jpg)$/,  loader: 'url?limit=25000'  },
         { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' }, 
         { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
         { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
         { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
         { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
         { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
        ],
        noParse: [path_to_react]
    }
};

module.exports = config;