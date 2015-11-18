'use strict';

var Marionette = require('backbone.marionette');
var _ = require('lodash');

var View = require('./views/accordion-button-view');
var Model = require('./models/accordion-button-model');

module.exports = Marionette.Object.extend({

    initialize : function (options) {
      this.options = this.options ? options : {};
      this.model = new Model(options);
      options.model = this.model;
      this.view = new View(options);
      this.contentView = options.view;
    },

    showContentView: function(){
      this.view.getRegion().show(this.contentView);
    },

    getView : function () {

        return this.view;
    },

    getModel : function () {

        return this.options.model;
    },

    setIcon : function (data) {

        return this.view.model.set('icon', data);
    },

    setTitle : function (data) {

        return this.view.model.set('title', data);
    },

    setSubtitle : function (data) {

        return this.view.model.set('subtitle', data);
    },

    setState : function (data) {

        return this.view.model.set('isOpen', data);
    },

    getState : function () {

        return this.view.model.get('isOpen') ? 'open' : 'close';
    },

    isOpen : function () {

        return this.view.model.get('isOpen') ? true : false;
    },

    setAvailability : function (data) {

        return this.view.model.set('isAvailable', data);
    },

    getAvailability : function () {

        return this.view.model.get('isAvailable') ? 'available' : 'disabled';
    },

    isAvailable : function () {

        return this.view.model.get('isAvailable') ? true : false;
    },

    setItemCollection : function (data) {

        return this.view.model.set('itemCollection', data);
    },

    getItemCollection : function () {

        return this.view.model.get('itemCollection');
    },

});
