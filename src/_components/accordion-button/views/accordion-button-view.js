'use strict';

var Marionette = require('backbone.marionette');

var Tpl = require('../templates/accordion-button.hbs');

module.exports = Marionette.ItemView.extend({

  template: Tpl,

  ui: {
    button: '.accordion-btn',
    content: '[data-region="accordion-content"]',
  },

  modelEvents: {
    'change': 'render'
  },

  events: {
    'click @ui.button': 'toggleState'
  },

  initialize : function () {
    this.initRegion();
    this.render();
  },

  initRegion: function(){
    var ContentRegion = Marionette.Region.extend({
      el: '[data-region="accordion-content"]'
    });
    this.contentRegion = new ContentRegion({

    });
  },

  templateHelpers: function() {
    return {
      open : this.model.get('isOpen') ? 'open' : 'close',
      availability: this.model.get('isAvailable') ? '' : 'disabled',
    }
  },

  getRegion: function(){
    return this.contentRegion;
  },

  toggleState: function(){
    this.model.toggle('isOpen')
  }


});
