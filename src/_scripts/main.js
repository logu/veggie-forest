// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Libraries
var Backbone = require('backbone');

// Application
var Application = require('./app');

// Subapps & high level modules
var HeaderApp = require('../_modules/header');
var Market = require('../_subapps/market');
var Cantine = require('../_subapps/cantine');

// Application  level
var app = new Application();
var appLayout = app.getAppLayout();

//---------- Adding sub apps

// Module/Header
app.addSubApp('header', HeaderApp, {
  container: appLayout.getRegion('header'),
  title: 'Veggie forest'
});

// Sub app/market
app.addSubApp('market', Market, {
  container: appLayout.getRegion('main')
});

// Sub app/cantine
app.addSubApp('cantine', Cantine, {
  container: appLayout.getRegion('bottomPanel')
});




app.start();

Backbone.history.start();
