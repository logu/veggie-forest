'use strict';

var Marionette = require('backbone.marionette');

var EmptyView = require('./empty-view');
var CardView = require('./card-view');

module.exports = Marionette.CollectionView.extend({

  className: 'cards',

  tagName: 'section',

  childView: CardView,

  emptyView: EmptyView


});
