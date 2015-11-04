var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        'market': 'startMarketList',
        'market/:id': 'startMarketItemDetail'
    }
});