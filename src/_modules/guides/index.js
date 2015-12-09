var Marionette = require('backbone.marionette');
var GuidesView = require('./views/guides-view.js');

module.exports = Marionette.Object.extend({
  initialize: function(options) {
    this.container = options.container;
    this.initTiles(options);
  },

  initTiles: function(options) {
    var guidesView = new GuidesView(options);
    this.container.show(guidesView);
  }
});
