var Marionette = require('backbone.marionette');
var GuidesView = require('./views/guides-view.js');

module.exports = Marionette.Object.extend({
  initialize: function(options) {
    this.container = options.container;
    this.parentChannel = options.parentChannel;
    this.initTiles(options);
  },

  initTiles: function(options) {
    this.guidesView = new GuidesView(options);
    this.container.show(this.guidesView);
    this.listenTo(this.guidesView, 'clicked', this.bubbleClicked);
  },

  bubbleClicked: function(model){
  	this.parentChannel.trigger('navigate:getFicheResto', model);
  }
});
