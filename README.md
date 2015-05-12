# react-webpack-cookbook-dev
using react with webpack to dev front-end

### install requirement packages

In this project uses Webpack + React for fast developing. Make a change in your file and instantanously see your update!

Open your favorite Terminal and run these commands

To create project from start, create folder and init project with npm

```sh
$ mkdir project_name && cd project_name && npm init
```

Next, we install wepack package

```sh
$ npm i webpack --save-dev
```

To run tool, hit

```sh
$ node_modules/bin/webpack
```
### Directory structure

Structure of project like this:
- /app
- /build
- package.js
- webpack.config.js

### create webpack configuration

create basic configuration could look like this:

```js
// webpack.config.js
var path = require('path');


module.exports = {
    entry: path.resolve(__dirname, 'app/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};
```

### Run first build

To generate bundle.js files, using webpack module bin 

```bash
$ node ./node_modules/webpack/bin/webpack.js
```

Or add fllowing scripts to package.json and run via npm

```js
"scripts": {
    "build": "webpack"
  }
```

And Run

```bash
$ npm run build
```

### Done Getting started

To check result, open index.html in build folder with chrome.
You also checkout source in via branch gettting-started

```bash
$ git checkout getting-started && npm install
```

## Running a workflow

### Setting up webpack-dev-server

As a first step, hit npm i webpack-dev-server --save
```sh
$ npm i web-pack-dev-server --save
```
And include settings to package.json scripts
```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "dev": "webpack-dev-server --port 8181 --devtool eval --progress --colors --hot --content-base build"
  }
```

And startup dev server from terminal
```sh
$ npm run dev
```
This script do some things as:
1. webpack-dev-server start a web service on localhost:8181
2. --devtool eval: create source urls for code, making able to pinpoint by filename and
 line number where any errors are thrown
3. --progress - Whill show progress of bundling your application
4. -- colors: colors in the terminal
5. --content-base - Points to the output directory configured


