'use strict';

var Backbone = require('backbone');
var _ = require('lodash');

module.exports = Backbone.Model.extend({

  defaults: {
    icon: '',
    title: '',
    subtitle: '',
    isOpen: false,
    isAvailable: true,
    itemCollection: []
  },

  toggle: function (attr) {
    if (_.isBoolean(this.get(attr))) {
      this.set(attr, !this.get(attr));
    }
  },
});
