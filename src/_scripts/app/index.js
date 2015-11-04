var Marionette = require('backbone.marionette');
var AppLayout = require('./views/app-layout.js');


module.exports = Marionette.Application.extend({
    initialize: function() {
        this._subApp = [];
        this.appLayout = new AppLayout();
    },

    addSubApp: function(name, klass ,options) {
        var module = new klass(options);

        this._subApp[name] = module;
    },

    getAppLayout: function() {
    	return this.appLayout;
    }
});