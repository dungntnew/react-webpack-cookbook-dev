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

# create app from scratch step-by-step
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

### Installing ReactJs

```sh
$ npm install react --save
```
Now we can start using reactjs in code

#### Using React In Code
*In any file*
```js
var React = require('react');

export default class Hello extends React.Component {
   render() {
      return <h1>Hello world</h1>;
   }
}
```

*main.js*
```js
import React from 'react'
import Hello from './componenet';

main();

function main(){
   React.render(<Hello />, document.getEledmentById('app'));
}
```

*build/index.jtml*
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8"/>
  </head>
  <body>
    <div id="app"></div>

    <script src="http://localhost:8080/webpack-dev-server.js"></script>
    <script src="bundle.js"></script>
  </body>
</html>
```

### Converting JSX
To use JSX syntax we need webpack to transform javascripts. This is the job of a loader.
We will use Babel as it's nice!
```bash
$ npm install babel-loader --save-dev
```
Now configure webpack to use this loader

*webpack.config.js*
```js
var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx
      loader: 'babel' // The module to load. "babel" is short for "babel-loader"
    }]
  }
};

module.exports = config;
```

Webpack will test each path required in code. In this project we using ES6 module loader syntax,
which means that require path of import MyComponent from './Component.jsx';

Run npm run dev to reload.

### Running minified file in development
Instead of making Webpack go through React JS and all its dependencies, you can override the behavior in development.
*webpack.config.js*

```js
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.min.js');

var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  resolve: {
    alias: {
      'react': pathToReact
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    noParse: [pathToReact]
  }
};

module.exports = config;
```

We do two things in this configuration:

- Whenever "react" is required in the code it will fetch the minified React JS file instead of going to node_modules

- Whenever Webpack tries to parse the minified file, we stop it, as it is not necessary

Take a look at Optimizing development for more information on this.

### Preparing CSS loading
install the two loaders: npm install css-loader style-loader --save-dev.
in the webpack.config.js file you can add the fllowing loader configuration:
*webpack.config.js*
```js
var path = require('path');
var config = {
  entry: path.resolve(__dirname, 'app/main.js')
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'jsx'
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    }]
  }
};

module.exports = config;
```

### Loading a CSS file
loading a css file is a simple as loading any file:
*main.js*
```js
import './main.css';
// Other code
```
*Componenet.jsx*
```js
import './Component.css';
import React from 'react';

export default React.createClass({
  render: function () {
    return <h1>Hello world!</h1>
  }
});
```

### CSS loading strategies

Depending on your application you might consider three main strategies. In addition to this you should consider including some of your basic CSS inlined with the initial payload (index.html). This will set the structure and maybe a loader while the rest of your application is downloading and executing.

#### All in one

In your main entry point, e.g. app/main.js you can load up your entire CSS for the whole project:

*app/main.js*

```js
import './project-styles.css';
// Other JS code
```
The CSS is included in the application bundle and does not need to download.

#### Lazy loading

If you take advantage of lazy loading by having multiple entry points to your application, you can include specific CSS for each of those entry points:

*app/main.js*

```js
import './style.css';
// Other JS code
app/entryA/main.js

import './style.css';
// Other JS code
app/entryB/main.js

import './style.css';
// Other JS code
```
You divide your modules by folders and include both CSS and JavaScript files in those folders. Again, the imported CSS is included in each entry bundle when running in production.

#### Component specific

With this strategy you create a CSS file for each component. It is common to namespace the CSS classes with the component name, thus avoiding some class of one component interfering with the class of an other.

*app/components/MyComponent.css*
```js
.MyComponent-wrapper {
  background-color: #EEE;
}
app/components/MyComponent.jsx

import './MyComponent.css';
import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <div className="MyComponent-wrapper">
        <h1>Hello world</h1>
      </div>
    )
  }
});
```

#### Using inline styles instead of stylesheets

With "React Native" you do not use stylesheets at all, you only use the style-attribute. By defining your CSS as objects. Depending on your project, you might consider this as your CSS strategy.
```js
app/components/MyComponent.jsx

import React from 'react';

var style = {
  backgroundColor: '#EEE'
};

export default React.createClass({
  render: function () {
    return (
      <div style={style}>
        <h1>Hello world</h1>
      </div>
    )
  }
});
```