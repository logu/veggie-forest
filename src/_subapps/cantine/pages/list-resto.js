'use strict'

var Marionette = require('backbone.marionette');

// Collections
var RestaurantsCollection = require('../../../_entities/restaurants/restaurants-collection');

// Modules
var Guides = require('../../../_modules/guides');

// Layout
var PageLayout = require('../views/cantine-layout-view');

module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
    this.layout = new PageLayout();
    console.log("show" + this.layout);
    //this.container.show(this.layout);
    this.parentChannel = options.parentChannel;
    this.initData();
    this.initModules();
    this.fetchData();
  },

  initData: function() {
    this.restaurantsCollection = new RestaurantsCollection();
  },

  initModules: function() {
    this.listenTo(this.restaurantsCollection, 'sync', this.initListResto);
  },

  fetchData: function() {
    this.restaurantsCollection.fetch({
      success: function(){
        console.log('OK Liste');
      }
    });
  },

  initListResto: function() {

    this.guides = new Guides({
      parentChannel: this.parentChannel,
      container: this.container,
      collection: this.restaurantsCollection
    });

  },

  restaurantsCollectionNavigate: function(model) {
    this.parentChannel.trigger('navigate:getCantine', model);
  }

});



