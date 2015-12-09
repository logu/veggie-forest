var Marionette = require('backbone.marionette');
var tpl = require('../templates/cantine-layout.hbs');

module.exports = Marionette.LayoutView.extend({
  template: tpl,
  initialize: function() {
    this.render();
  },

  regions: {
    main: '[data-region="cantine-main"]'
  }
});
