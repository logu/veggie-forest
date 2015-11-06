var Marionette = require('backbone.marionette');
var _ = require('lodash');
var AppLayout = require('./views/app-layout.js');
var Radio = require('backbone.radio');

module.exports = Marionette.Application.extend({
    initialize: function() {
      this._subApp = [];
      this.appLayout = new AppLayout();
      this.channel = new Radio.channel('app');
    },

    addSubApp: function(name, klass ,options) {
      _.extend(options, {parentChannel: this.channel });
        var module = new klass(options);

        this._subApp[name] = module;
    },

    getAppLayout: function() {
    	return this.appLayout;
    }
});
