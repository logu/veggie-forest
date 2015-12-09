'use strict';

var Marionette = require('backbone.marionette');

var EmptyView = require('./empty-view');
var GuideView = require('./guide-view');

module.exports = Marionette.CollectionView.extend({

  className: 'guides',

  tagName: 'section',

  childView: GuideView,

  emptyView: EmptyView


});
