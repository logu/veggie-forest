var Marionette = require('backbone.marionette');

var Router = require('./router');

var Market = require('./model/market');
var MarketCollection = require('./model/market_collection');

var MarketListView = require('./list/collection_view');
var MarketDetailView = require('./detail/market_view');

module.exports = Marionette.Object.extend({
    initialize: function(options) {
        this.container = options.container;

        this.router = new Router({
            controller: this
        });

        this.marketCollection = new MarketCollection();
    },

    startMarketList: function() {
        var marketListView = new MarketListView({
            collection: this.groups
        });

        this.marketCollection.fetch();

        this.container.show(marketListView);
    },

    startMarketItemDetail: function(id) {
        var marketDetailView = new MarketDetailView({
            model: this.marketCollection.findWhere({id: id})
        });

        this.container.show(marketDetailView);
    }
});