'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/card.hbs');

module.exports = Marionette.ItemView.extend({

  tagName: 'article',

  template: tpl,

  className: 'card',

  ui: {
    'favorite': '.cardContentButton'
  },

  events:{
    'click @ui.favorite' : 'onFavoritClick'
  },

  setBadge: function() {
    this.$el.addClass('with-badge');
  },

  onRender: function(){
    console.log('my model is', this.model)
  },

  onFavoritClick: function(){
    this.$('.cardContentButton').addClass('is-active');
    this.$('.card_image').addClass('is-active');
    this.$('.cardContentButton i').addClass('is-active');
    this.$('.menuSocial').addClass('is-active');
    this.$('.menuSocialItem').addClass('is-active');
    this.$('.titleSocial').addClass('is-active');
  }

});
