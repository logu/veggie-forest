'use strict';

var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({

    className : 'accordion-item',

    events : {
        'click' : 'onClick'
    },

    initialize : function () {
        console.log('accordionItem/initialize');
    },

    onClick : function () {
        console.log('accordionItem/onClick');
    }

/*
* /

// The accordion base ItemView
var AccordionItemView = Backbone.Marionette.ItemView.extend({

    itemDeselect: function() {
        this.minimize();
        this.model.set({ selected: false });
    },
    itemSelect: function() {
        if (this.model.get("selected") === true) { return; }
        this.model.set({ selected: true });
        this.maximize();
        this.vent.trigger("AccordionView:SaveSelection", this.model.cid);
    },
    minimize: function() {
        this.$el.find(this.elContent).slideUp(this.slideUpSpeed);
    },
    maximize: function() {
        this.$el.find(this.elContent).slideDown(this.slideDownSpeed);
    }
});

*/
});
