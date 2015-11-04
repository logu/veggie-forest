var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        'market': 'startVeggieList',
        //'market/:id': 'startMarketItemDetail'
    }
});