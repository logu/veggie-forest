'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/card.hbs');

module.exports = Marionette.ItemView.extend({

  tagName: 'article',

  template: tpl,

  className: 'card',

  setBadge: function() {
    this.$el.addClass('with-badge');
  }

});
