'use strict';

var Marionette = require('backbone.marionette');
var tpl = require('../templates/guide.hbs');

module.exports = Marionette.ItemView.extend({

  tagName: 'article',

  template: tpl,

  className: 'guide',

  ui: {
    // 'favorite': '.cardContentButton',
    // 'favoritIcon': '.cardContentButton i',
    // 'cardImage': '.card_image'
  },

  events:{
    // 'click @ui.favorite' : 'onFavoritClick'
  },

  setBadge: function() {
    // this.$el.addClass('with-badge');
  },

  onFavoritClick: function(){
    this.ui.favorite.addClass('is-active');
    this.ui.cardImage.addClass('is-active');
    this.ui.favoritIcon.addClass('is-active');
    this.$('.titleSocial').addClass('is-active');
  }

});
