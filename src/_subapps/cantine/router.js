var Marionette = require('backbone.marionette');

module.exports = Marionette.AppRouter.extend({
  appRoutes: {
    'cantine': 'getListResto',
    'cantine-fiche-resto': 'getFicheResto'
  }
});
