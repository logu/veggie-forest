var Marionette = require('backbone.marionette');
var _ = require('underscore');

module.exports = Marionette.Application.extend({
    initialize: function() {
        this._modules = [];
    },

    addModule: function(name, klass ,options) {
        var module = new klass(options);

        this._modules[name] = module;
    }
});