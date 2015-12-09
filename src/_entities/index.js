'use strict';

var $ = require('jquery');
var Radio = require('backbone.radio');
var Marionette = require('backbone.marionette');
var Veggies = require('./veggies/veggies-collection');
var Restaurants = require('./restaurants/restaurants-collection');

module.exports = Marionette.Object.extend({

  initialize: function(options) {
    this.channel = new Radio.channel('entities');
    this.initEntities();
  },

  initEntities: function(){
    this.setVeggiesHandler();
    this.setRestaurantsHandler();
  },

  // Entites

  // How to use :
  //var promise = entitiesChannel.request('entities:veggies');
  //promise.done(function(veggies){
  //  //use veggies
  //});

  setVeggiesHandler: function(){
    this.channel.reply('entities:veggies', function() {
      return this.getVeggies();
    });
  },

  getVeggies: function() {
    var veggies = new Veggies();
    var deferred = $.Deferred();
    veggies.fetch({
      success: deferred.resolve
    });

    return deferred.promise();
  },


  setRestaurantsHandler: function(){
    this.channel.reply('entities:restaurants', function() {
      return this.getRestaurants();
    });
  },

  getRestaurants: function() {
    var restaurants = new Restaurants();
    var deferred = $.Deferred();
    restaurants.fetch({
      success: deferred.resolve
    });

    return deferred.promise();
  },


});

