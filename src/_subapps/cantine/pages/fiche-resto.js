'use strict'

var Marionette = require('backbone.marionette');

// Collections
var RestaurantsCollection = require('../../../_entities/restaurants/restaurants-collection');

// Modules
var Fiche = require('../../../_modules/fiche');

// Layout
var PageLayout = require('../views/cantine-layout-view');

module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.model = options.model;
    this.container = options.container;
    this.layout = new PageLayout();
    this.container.show(this.layout);
    this.parentChannel = options.parentChannel;
    this.initModules(options);
  },

  initModules: function(options) {
    this.initFicheResto(options)
  },

  initFicheResto: function() {
    this.fiche = new Fiche({
      container: this.container,
      model: this.model,
    });
  },

});



