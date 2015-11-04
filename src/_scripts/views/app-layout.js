var Marionette = require('backbone.marionette');

module.exports = Marionette.LayoutView.extend({
    el: '[data-region="app-holder"]',

    regions: {
        header: '[data-region="header"]',
        main: '[data-region="main"]'
    }
});