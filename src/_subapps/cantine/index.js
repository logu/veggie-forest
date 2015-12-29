'use strict';

var Marionette = require('backbone.marionette');
var Backbone = require('backbone');
var Router = require('./router');
var Radio = require('backbone.radio');
var _ = require('lodash');

var RestaurantsCollection = require('../../_entities/restaurants/restaurants-collection');

var CantineLayoutView = require('./views/cantine-layout-view');

//Modules
var Guides = require('../../_modules/guides');

//Pages
var ListResto = require('./pages/list-resto');
var FicheResto = require('./pages/fiche-resto');

module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.container = options.container;
    this.mainLayout = new CantineLayoutView();
    this.channel = new Radio.channel('cantine');
    this.router = new Router({
      controller: this
    });
    this.showMainLayout();
    this.restaurantsCollection = new RestaurantsCollection();
    this.listenChannel();
  },

  showMainLayout: function() {
    this.container.show(this.mainLayout);
  },

  listenChannel: function(){
    // Navigation event
    this.channel.on('navigate:getFicheResto', _.bind(this.navigateGetFicheResto, this));
  },

  // ROUTED PAGES ====================

    // Display Liste restaurants
  // getCantine: function() {

  //   this.guides = new Guides({
  //     container: this.mainLayout.getRegion('cantineMain'),
  //     collection: this.restaurantsCollection
  //   });

  //   this.restaurantsCollection.fetch({
  //     success: function(){
  //       console.log('OK cantine');
  //     }
  //   });
  // },

  getListResto: function() {
    // On appelle la page list-resto
    console.log('OK DOKI cantine');
    this.showPage(ListResto, {});
    this.animateRegion();
  },

  getFicheResto: function() {

    // On appelle la page fiche-resto
    this.showPage(FicheResto, {
      model : this.ficheModel
    });

  },

  showPage: function(Page, options) {

    console.log('options', options);

    // Reset region and container
    this.resetRegions();

    var page = new Page({

      container : this.mainLayout.getRegion('cantineMain'),
      parentChannel : this.channel,
      model: options.model,
      scriptId : options.scriptId,
      isToSave : options.isToSave
    });
  },

  resetRegions: function() {
    var regions = this.mainLayout.getRegions();
    var keys = Object.keys(regions);
    for (var i=0; i<keys.length; i++) {
      this.mainLayout.getRegion(keys[i]).reset();
    }
  },

  animateRegion: function(){
    this.mainLayout.getRegion('cantineMain').on('show',function(){
      this.$el.parent().parent().addClass('open');
    });
    this.mainLayout.getRegion('cantineMain').on('close',function(){
      this.$el.parent().parent().removeClass('open');
    });
  },

  // NAVIGATION METHODS ==================

  navigateGetFicheResto: function(model) {
    console.log('model =' + model);
    this.ficheModel = model;
    this.router.navigate('cantine-fiche-resto', { trigger: true});
  },


});
