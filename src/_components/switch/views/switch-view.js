'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({

    template: require('../templates/switch.hbs'),

    className: 'switch',

    ui: {
        checkbox: 'input[type=checkbox]'
    },

    events: {
        'change @ui.checkbox': 'toggle'
    },
    mergeViewOptions: ['text'],
    initialize: function() {
        this.mergeOptions(this.options, this.mergeViewOptions);

        this.listenTo(this.model, 'change:disabled', this.toggleAvailability);
        this.listenTo(this.model, 'change:state', this.syncCheckboxState);
    },

    text: {
        on: 'on',
        off:  'off',
        label: ''
    },

    toggleAvailability: function(disabled) {
        if (disabled) {
            this.ui.checkbox.attr('disabled', 'disabled');
        } else {
            this.ui.checkbox.removeAttr('disabled');
        }

        this.$el.toggleClass('disabled', disabled);
    },

    syncCheckboxState: function(model, checked) {
        this.ui.checkbox.prop && this.ui.checkbox.prop('checked', checked);
    },

    templateHelpers: function() {
        return {
            id: this.cid,
            disabled: this.model.get('disabled') ? 'disabled' : '',
            text: this.text
        };
    },

    toggle: function() {
        this.model.toggle('state');
        return this;
    }
});
