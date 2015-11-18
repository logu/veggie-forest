# Veggie-Forest.

## Basic Starter


### Introduction

This kit helps you create a design system for an app using marionette.  It encourages the Javascript architecture, and enables you to develop a reusable and maintainable codebase.

This starter kit is a minimal scaffolding, it's packed with a build system, an application boilerplate and a packages management system.  It contains many layout and structural helpers, utilities, and basic element and module styles that you will build upon. It is really a starting point, an organized set of files.

### Technologies used

JavaScript
- [Browserify](http://browserify.org/)
- [Node](https://nodejs.org/)

Testing
- [Karma](http://karma-runner.github.io/0.13/index.html)
- [Mocha](http://mochajs.org/)

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


### Build & Deployment Process

This starter kit includes a build system by which source can be linted, tested and compressed in preparation for production use. For this task, [gulp](http://gulpjs.com/) is used.

#### Use Gulp tasks

*`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server
*`gulp serve`: Compiles preprocessors and boots up development server
*`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
*`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form
*`gulp test`: Lints all `*.js` file in the `source` folder using eslint and runs all `*.test.js` file unit tests through [Karma](http://karma-runner.github.io/0.13/index.html) and Mocha + Chai
*`gulp test --watch`: Same as `gulp test` but will constantly watch `*.test.js` files and rerun tests when changes are detected

### Directory structure

The root directory generated for the app :
<pre>
├──  veggie-forest/
│   ├──  app/
│   │   ├──  images/
│   │   ├──  data/
│   │   ├──  scripts/
│   │   │   ├── components/
|   |   |   |   └── scripts for objects/modules
│   │   │   ├── modules/
|   |   |   |   └── scripts for pages/modules of a page
│   │   │   ├── views/
|   |   |   |   └── scripts for views in your page
|   |   |   └── main.js (main file js)
│   │   ├──  styles/
|   |   |   ├── base
|   |   |   |   └── variables, resets, mixins, global assets like fonts
|   |   |   ├── elements
|   |   |   |   └── styles for base elements (p, ul, img etc.)
|   |   |   ├── layout
|   |   |   |   └── grids, widths, utilities, etc.
|   |   |   ├── modules
|   |   |   |   └── styles for objects/modules (.sg-grid etc.)
|   |   |   ├── components
|   |   |   |   └── styles for objects/components
|   |   |   ├── views
|   |   |   |   └── styles for pages/page modules (.homepage etc.)
|   |   |   ├── main.less (the manifest file that pulls in all the partials and compiles into main.css)
│   │   │   └──  vendor.less (the manifest file that pulls in all the vendor styles and compiles into vendor.css)
│   │   ├──  404.html
│   │   ├──  favicon.ico
│   │   └──  index.html
│   ├──  doc/
│   ├──  gulp/
│   │   ├──  build.js
│   │   ├──  e2e-tests.js
│   │   ├──  server.js
│   │   ├──  unit-tests.js
│   │   ├──  watch.js
│   │   └──  wiredep.js
│   ├──  .bowerrc
│   ├──  .editorconfig
│   ├──  .gitignore
│   ├──  .jshintrc
│   ├──  bower.json
│   ├──  gulpfile.json
│   └──  README.md
</pre>


### Tasks included in the gulpfile

* *useref* : allow configuration of your files in comments of your HTML file
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *jshint* : JavaScript code linter. This will be the sanity check tool. It checks the JavaScript files for bad practices or JavaScript pitfalls.
* *imagemin* : all your images will be optimized at build
* *browser sync* : full-featured development web server with livereload and devices sync

## Package managers

Managing third party code and their dependencies should be performed by Package managers. Here we use npm to manage dependencies

### Adding packages

To install a package use the following command lines :
```
# registered npm package used in your code
$ npm install  [package_name] --save
# registered npm package used only for developpement
$ npm install  [package_name] --save-dev

```

### Settings

In some work envirement proxy settings had to be set : [link](http://jjasonclark.com/how-to-setup-node-behind-web-proxy/)

TODO:
- Add JS doc
- Doc each folder (Best practice CSS, Best practice JS etc.)

