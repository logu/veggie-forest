/*eslint no-unused-expressions:0 */
'use strict';

var VeggieList = require('../index');

describe('Veggie List View', function() {

  beforeEach(function() {
  	var options = {
  		container : {}
  	};
    this.veggieList = new VeggieList(options);
  });

  it('Should run a few assertions', function() {
    expect(this.veggieList).to.exist;
  });

});
