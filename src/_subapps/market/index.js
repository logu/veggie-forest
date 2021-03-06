'use strict';

var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var Router = require('./router');
var MarketLayoutView = require('./views/market-layout-view');
var Radio = require('backbone.radio');

var VeggiesCollection = require('../../_entities/veggies/veggies-collection');

//var MarketModel = require('./model/market');
//var MarketCollection = require('./model/market_collection');

var Cards = require('../../_modules/cards');
var Search = require('../../_modules/search');
var Months = require('../../_modules/months');

module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
    this.mainLayout = new MarketLayoutView();
    this.channel = new Radio.channel('market');
    this.router = new Router({
      controller: this
    });
    this.showMainLayout();
    this.veggiesColection = new VeggiesCollection();
    //this.marketCollection = new MarketCollection();
  },

  showMainLayout: function() {
    this.container.show(this.mainLayout);
  },

  startCards: function(month) {

    this.cardsCollection = this.parentChannel;
    this.cards = new Cards({
      parentChannel : this.channel,
      container: this.mainLayout.getRegion('main'),
      collection: this.veggiesColection
    });

    this.search = new Search({
      parentChannel : this.channel,
      container: this.mainLayout.getRegion('toolbar'),
      collection: this.veggiesColection
    });

    this.listenTo(this.channel, 'cards:addToList',this.onCardsAddToList);
    this.veggiesColection.fetch({
      success: function(){
        console.log('ok market')
      }
    });
  },

  onCardsAddToList: function(){
    this.parentChannel.trigger('market:cards:addToList', this.veggieList);
  },

});
