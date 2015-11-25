'use strict';

var Marionette = require('backbone.marionette');
var SearchView = require('./views/search-view');

module.exports = Marionette.Object.extend({
  initialize: function(options) {
    this.container = options.container;
    this.initSearch(options);
  },

  initSearch: function(options) {
    var searchView = new SearchView(options);
    this.container.show(searchView);
  }
});

