'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/header.hbs');

module.exports = Marionette.ItemView.extend({

  template: tpl,

  className: 'app-header',

  tagName: 'div',

  ui: {
    backButton: 'go-back'
  },

  events: {
    'click @ui.backButton': 'return',
  },

  initialize: function(options) {
    this.render();
  },

  return: function() {
    this.trigger('return-back');
  },

  templateHelpers: {
    title: function () {
      return this.options.title;
    }
  }

});
