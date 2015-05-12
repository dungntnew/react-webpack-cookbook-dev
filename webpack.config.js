/// <reference path="typings/node/node.d.ts"/>
var path = require('path');


var config = {
    entry: ['webpack/hot/dev-server', 
            path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [{ 
            test: /\.jsx?$/, // a regexp to test the require path. accepts either js or jsx
            loader: 'babel' // the module to load. 
        }]
    }
};

module.exports = config;