'use strict';
var _ = require('lodash');
var Backbone = require('backbone');

module.exports = Backbone.Model.extend({

  defaults : {},

  parse: function (data) {
    return this.parseContent(data.content.$t);
  },

  // Utility function to make a string ID worthy
  formatIdName : function ( str ) {
    return str.replace( " ", "" ).toLowerCase();
  },

  // Parse and return feed.entry.content.$t
  parseContent : function ( content ) {
    // Split the text...
    var chunks = content.split( ', ' ),
      self = this,
      cells = {};
    // ... and loop over the result
    _.each( chunks, function ( element, index, list ) {
      // Split it again
      var parts = element.split( ': ');
      // Build our cell object
      cells[ self.formatIdName( parts[ 0 ] ) ] = parts[ 1 ]

    } );
    // Return all cells
    return cells;
  }

});
