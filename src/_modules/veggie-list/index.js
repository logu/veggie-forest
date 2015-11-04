'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.Object.extend({
    initialize: function(options) {
    	this.container = options.container;
        console.log('veggie list');
    },
});