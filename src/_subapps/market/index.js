'use strict'; 

var Marionette = require('backbone.marionette');

var Router = require('./router');
var MarketLayoutView = require('./views/market-layout-view.js');

//var MarketModel = require('./model/market');
//var MarketCollection = require('./model/market_collection');

var VeggieList = require('../../_modules/veggie-list');
//var MarketDetailView = require('./detail/market_view');

module.exports = Marionette.Object.extend({
    initialize: function(options) {
        this.container = options.container;
        this.mainLayout = new MarketLayoutView();

        this.router = new Router({
            controller: this
        });

        //this.marketCollection = new MarketCollection();
    },

    showMainLayout: function() {
        this.container.show(this.mainLayout);
    },

    startVeggieList: function() {
        var veggieList = new VeggieList({
            container: this.mainLayout.getRegion('main'),
            //collection: this.marketCollection
        });
        this.showMainLayout()
    },

    // startMarketItemDetail: function(id) {
    //     var marketDetailView = new MarketDetailView({
    //         //model: this.marketCollection.findWhere({id: id})
    //     });

    //     this.container.show(marketDetailView);

    //     this.mainLayout.getRegion('main').show(marketDetailView);
    //     this.showMainLayout()
    // }
});