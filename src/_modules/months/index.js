'use strict';

// Libraries
var _ = require('lodash');
var Backbone = require('backbone');
var Marionette = require('backbone.marionette');
// Views
var MonthsView = require('./views/months-view.js');

module.exports = Marionette.Object.extend({
  initialize: function(options) {
    this.container = options.container;
    this.collection =  new Backbone.Collection([
      {month:'January'},
      {month:'February'},
      {month:'March'},
      {month:'April'},
      {month:'May'},
      {month:'June'},
      {month:'July'},
      {month:'August'},
      {month:'September'},
      {month:'October'},
      {month:'November'},
      {month:'December'},
    ]);
    _.extend(options, {
      collection: this.collection
    });
    this.initMonthList(options);
  },

  initMonthList: function(options) {
    var monthsView = new MonthsView(options);
    this.container.show(monthsView);
  }
});
