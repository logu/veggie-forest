var Marionette = require('backbone.marionette');
var FicheView = require('./views/fiche-view.js');

module.exports = Marionette.Object.extend({
  initialize: function(options) {
    this.container = options.container;
    this.initTiles(options);
  },

  initTiles: function(options) {
    var ficheView = new FicheView(options);
    this.container.show(ficheView);
  }
});
