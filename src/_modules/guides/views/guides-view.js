'use strict';

var Marionette = require('backbone.marionette');

var EmptyView = require('./empty-view');
var GuideView = require('./guide-view');

module.exports = Marionette.CollectionView.extend({

  className: 'guides',

  tagName: 'ul',

  onChildviewNavigateFicheResto: function(e) {
  	this.trigger('clicked', e.model);
  },

  childView: GuideView,

  emptyView: EmptyView

});
