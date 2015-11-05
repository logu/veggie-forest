'use strict';

var Backbone = require('backbone');
var _ = require('lodash');

module.exports = Backbone.Model.extend({

    defaults: {
        state: true,
        onValue: 'On',
        offValue: 'Off',
        enabled: true
    },

    toggle: function(attr) {
        if (_.isBoolean(this.get(attr))) {
            this.set(attr, !this.get(attr));
        }
    },

    getSelectedValue: function() {
        if (this.get('state')) {
            return this.get('onValue');
        } else {
            return this.get('offValue');
        }
    }
});
