'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.Object.extend({
    initialize: function(options) {
        console.log('LOG: veggie list');
    },
});
