'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/search.hbs');

module.exports = Marionette.ItemView.extend({

  template: tpl,

  className: 'Search',

  tagName: 'form',

});
