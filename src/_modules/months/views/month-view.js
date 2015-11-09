'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/month.hbs');

module.exports = Marionette.ItemView.extend({
  tagName: 'li',
  template: tpl,
  className: 'month'
});
