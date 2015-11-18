var Marionette = require('backbone.marionette');
var View = require('./views/switch-view');
var Model = require('./models/switch-model');

module.exports = Marionette.Object.extend({
  initialize: function(options) {
    if (options === undefined) {
      options = {};
    }

    this.model = new Model(options);
    options.model = this.model;
    this.view = new View(options);

    console.log('%s components switch');
  },

  getState: function() {
    return this.model.get('state');
  },

  setState: function(state) {
    if (typeof state === 'string') {
      if (this.model.get('onValue') && this.model.get('onValue') === state) {
        this.model.set('state', true);
      }

      if (this.model.get('offValue') && this.model.get('offValue') === state) {
        this.model.set('state', false);
      }
    } else {
      return this.model.set('state', state);
    }
  },

  toggleState: function() {
    this.model.toggle('state');
  },

  getSelectedValue: function() {
    return this.model.getSelectedValue();
  },

  toggleAvailability: function(disabled) {
    this.model.set('disabled', disabled);
  },

  getView: function() {
    return this.view;
  },

  getModel: function() {
    return this.model;
  },

});
