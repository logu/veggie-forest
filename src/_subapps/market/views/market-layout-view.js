var Marionette = require('backbone.marionette');
var tpl = require('../templates/market-layout.hbs');

module.exports = Marionette.LayoutView.extend({
  template: tpl,
  initialize: function() {
    this.render();
  },

  regions: {
    header: '[data-region="header"]',
    toolbar: '[data-region="toolBar"]',
    main: '[data-region="main"]',
    footer: '[data-region="footer"]'
  }
});
