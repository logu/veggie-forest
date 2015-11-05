var Marionette = require('backbone.marionette');
var HeaderView = require('./views/header-view.js');

module.exports = Marionette.Object.extend({
    initialize: function(options) {
        this.container = options.container;
        this.initHeader();
    },

    initHeader: function() {
        var headerView = new HeaderView();
        this.container.show(headerView);
    }
});