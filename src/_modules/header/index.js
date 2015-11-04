var Marionette = require('backbone.marionette');


module.exports = Marionette.Object.extend({
    initialize: function(options) {
        this.container = options.container;
        initHeader();
    },

    initHeader: function() {
        var headerView = new HeaderView();
        this.container.show(headerView);
    }
});