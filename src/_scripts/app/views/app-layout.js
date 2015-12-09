var Marionette = require('backbone.marionette');
var tpl = require('../templates/app-layout.hbs');
var _ = require('underscore');

module.exports = Marionette.LayoutView.extend({
  el: '[data-region="app-holder"]',
  template: tpl,
  initialize: function() {
    this.render();
    this.animateRegion();
  },

  regions: {
    header: '[data-region="header"]',
    main: '[data-region="main"]',
    bottomPanel: '[data-region="bottom-panel"]',
    footer: '[data-region="footer"]'
  },

  animateRegion: function(){
    this.getRegion('bottomPanel').on('show',function(){
      this.$el.addClass('open');
    });

    this.getRegion('bottomPanel').on('close',function(){
      this.$el.removeClass('open');
    });  

    this.getRegion('main').on('show',function(){
      //this._parent.getRegions().bottomPanel.empty();
    });
  }
});
