'use strict';

var Marionette = require('backbone.marionette');
var iScroll = require('iscroll');
var tpl =  require('../templates/months.hbs');
var MonthView = require('./month-view');

module.exports = Marionette.CompositeView.extend({

  className: 'cards',

  template: tpl,

  tagName: 'section',

  childView: MonthView,

  childViewContainer: '[data-region="months-list"]',

  onRenderCollection: function() {
    var theScroll;
    function scroll() {
      theScroll = new iScroll('wrapper');
    }
    document.addEventListener('DOMContentLoaded', scroll, false);
  },


});
