'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/fiche.hbs');

var EmptyView = require('./empty-view');

module.exports = Marionette.ItemView.extend({

  className: 'fiche',

  tagName: 'div',

  template: tpl,

  emptyView: EmptyView,

  triggers: {
    'click .close': 'navigate:ListResto',
  }

});
