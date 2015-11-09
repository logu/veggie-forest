'use strict';

var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var Router = require('./router');
var MarketLayoutView = require('./views/market-layout-view.js');
var Radio = require('backbone.radio');

//var MarketModel = require('./model/market');
//var MarketCollection = require('./model/market_collection');

var Cards = require('../../_modules/cards');
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
      //this.marketCollection = new MarketCollection();
  },

  showMainLayout: function() {
      this.container.show(this.mainLayout);
  },

  startCards: function() {
     var cards = new Cards({
          parentChannel : this.channel,
          container: this.mainLayout.getRegion('main'),
           collection: new Backbone.Collection([
             {name: "apple"},
             {name: "orange"}
           ])
          //collection: this.marketCollection
      });
      this.listenTo(this.channel, 'cards:addToList',this.onCardsAddToList);
  },

   showMonthList: function() {
     var months = new Months({
       parentChannel : this.channel,
       container: this.mainLayout.getRegion('main'),
       collection: new Backbone.Collection([
         {month:'January'},
         {month:'February'},
         {month:'March'},
         {month:'April'},
         {month:'May'},
         {month:'June'},
         {month:'July'},
         {month:'August'},
         {month:'September'},
         {month:'October'},
         {month:'November'},
         {month:'December'},
       ]),
       //collection: this.marketCollection
     });
   },

  onCardsAddToList: function(){
    this.parentChannel.trigger('market:cards:addToList', this.veggieList);
  },

});
