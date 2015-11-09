var Marionette = require('backbone.marionette');
var MonthsView = require('./views/months-view.js');

module.exports = Marionette.Object.extend({
    initialize: function(options) {
        this.container = options.container;
        this.initTile(options);
    },

    initTile: function(options) {
        var monthsView = new MonthsView(options);
        this.container.show(monthsView);
    }
});
