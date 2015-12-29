'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/guide.hbs');
var $ = require('jquery');

module.exports = Marionette.ItemView.extend({

  tagName: 'li',

  template: tpl,

  className: 'list-item',

  triggers: {
    'click a': 'navigate:ficheResto',
  }

});
