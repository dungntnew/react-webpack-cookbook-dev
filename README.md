# react-webpack-cookbook-dev
using react with webpack to dev front-end

# quick-start
```sh
$ git clone git@github.com:dungntnew/react-webpack-cookbook-dev.git
$ cd react-webpack-cookbook-dev & git checkout develop
$ npm run develop
```

Open browser at: [http://127.0.0.1:8181] to see result,
Any change in app/ folder occurd will fire event autoreload browser and restart server.
Enjoy!

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
- webpack-dev-server start a web service on localhost:8181
- --devtool eval: create source urls for code, making able to pinpoint by filename and
 line number where any errors are thrown
- --progress - Whill show progress of bundling your application
- -- colors: colors in the terminal
- --content-base - Points to the output directory configured

## Automatic browser refresh

When webpack-dev-server is running it will watch your files for changes. When that happens
it rebundles your project and notifies browsers listening to refresh. To trigger this 
behaviour you neet to change your index.html in build/ folder.

*build/index.html*

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
  </head>
  <body>
    <script src="http://localhost:8080/webpack-dev-server.js"></script>
    <script src="bundle.js"></script>
  </body>
</html>
```

We added a scripts that refresh the application when a change occurs. You will also need to add an entry point to your configuration.
```js
var path = require('path');


module.exports = {
    entry: ['webpack/hot/dev-server', path.resolve(__dirname, 'app/main.js')],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
};
```

### Default environment

In the example above we created our own index.html file to give more freedom and control. It is also possible to run the application from http://localhost:8181/webpack-dev-server/bundle. 
This will fire up a default index.html file that you do not control. It also fires this file up in an iFrame allowing for a status bar to indicate the status of the rebundling process.


## Modules & Understanding Paths
Webpack allows you to use different module patterns. include ES6, CommonJS, AMD. To see more about module
system, let's refer this article for details. In this example, module1.js and module2.js then we 
include in main.js via relative path

```path
app/modules/module1.js
app/modules/module2.js
```

