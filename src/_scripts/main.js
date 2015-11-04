// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

// Libraries
var Backbone = require('backbone');

// Application level
var Application = require('./app');
var MainLayout = require('./views/app-layout');

// Subapps 
var HeaderApp = require('../_modules/header');

var app = new Application();
var layout = new MainLayout();

//---------- Adding sub apps 

// Sub app/Header 
app.addModule('header', HeaderApp, {
    container: layout.getRegion('header')
});

// Sub app/market 
app.addModule('market', Market, {
    container: layout.getRegion('main')
});

app.start();

Backbone.history.start({
    pushState: true
});