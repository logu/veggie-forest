'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/empty.hbs');

module.exports = Marionette.ItemView.extend({
  template: tpl,
});
