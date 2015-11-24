'use strict';
var _ = require('lodash');
var $ = require('jquery');
var Backbone = require('backbone');
var Veggie = require('./veggie-model.js');

module.exports = Backbone.Collection.extend({

  model: Veggie,

  url: 'https://spreadsheets.google.com/feeds/list/1oBGpx1YH07_zJbvyqMxzFWGXux_dAdETzkt1JQLHNww/od6/public/values?alt=json',

  // As we using JSONP, we need to override the built in Backbone fetch()
  sync: function (method, model, options) {
    var params = _.extend({
      type: 'GET',
      dataType: 'jsonp',
      url: this.url,
      processData: false
    }, options);
    return $.ajax(params);
  },

  // The JSON returned isn't collection friendly for our needs (the items are nested further down),
  // so parse the response before passing it on
  parse: function (response) {
    // This is what we need
    var data = response.feed.entry;
    // But they have IDs, and Backbone will think they're duplicates, so drop the ID
    data = _.map(data, function (item) {
      var obj = _.omit(item, 'id');
      return obj;
    });
    return data;
  },

  // Sets the field to sort on, and the direction (ascending or descending)
  // to be used by the collection comparator
  setSortParams: function (field, direction) {
    if (field) {
      this.sortField = field;
    }
    this.sortDirection = direction || 'asc';
  },

  // Sort by. Uses the default order the first time around
  comparator: function (item) {
    // First time this fires (automagically) don't do anything
    if (!this.sortField || !item.get('cells')[this.sortField]) {
      return;
    }
    // This is what we're going to sort on
    var sort = item.get('cells')[this.sortField].sort;
    if (this.sortDirection.toUpperCase() === 'DESC') {
      // Backbone doesn't sort strings in reverse properly. This is a bit of a hack, but it works
      if (item.get('cells')[this.sortField].type === 'string') {
        sort = sort.toLowerCase();
        sort = sort.split("");
        sort = _.map(sort, function (letter) {
          return String.fromCharCode(-( letter.charCodeAt(0) ));
        });
      } else {
        // It does reverse ints OK, so we just need to negate the order
        sort = -item.get('cells')[this.sortField].sort;
      }
    }
    return sort;
  }
});
