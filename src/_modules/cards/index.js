var Marionette = require('backbone.marionette');
var CardsView = require('./views/cards-view.js');

module.exports = Marionette.Object.extend({
  initialize: function(options) {
    this.container = options.container;
    this.initTile(options);
  },

  initTile: function(options) {
    var cardsView = new CardsView(options);
    this.container.show(cardsView);
  }
});
