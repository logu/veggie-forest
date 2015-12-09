'use strict';

var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var Router = require('./router');
var CantineLayoutView = require('./views/cantine-layout-view');
var Radio = require('backbone.radio');

var RestaurantsCollection = require('../../_entities/restaurants/restaurants-collection');

//var MarketModel = require('./model/market');
//var MarketCollection = require('./model/market_collection');

var Guides = require('../../_modules/guides');
// var Search = require('../../_modules/search');

module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
    this.mainLayout = new CantineLayoutView();
    // this.channel = new Radio.channel('cantine');
    this.router = new Router({
      controller: this
    });
    this.showMainLayout();
    this.restaurantsCollection = new RestaurantsCollection();
  },

  showMainLayout: function() {
    this.container.show(this.mainLayout);
  },

  getCantine: function() {

    this.guides = new Guides({
      container: this.mainLayout.getRegion('main'),
      collection: this.restaurantsCollection
    });

    /*
    this.search = new Search({
      parentChannel : this.channel,
      container: this.mainLayout.getRegion('toolbar'),
      collection: this.restaurantsCollection
    });
    */

    // this.listenTo(this.channel, 'guides:addToList',this.onGuidesAddToList);
    this.restaurantsCollection.fetch({
      success: function(){
        console.log('Good cantine');
      }
    });
  },


});
