var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
  appRoutes: {
    '': 'startCards',
    'month/:month': 'startCards',
    'months': 'showMonthList'
  }
});
