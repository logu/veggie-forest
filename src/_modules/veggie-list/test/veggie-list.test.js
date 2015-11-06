/*eslint no-unused-expressions:0 */
'use strict';

var VeggieList = require('../index');

describe('Veggie List View', function() {

  beforeEach(function() {
    this.veggieList = new VeggieList();
  });

  it('Should run a few assertions', function() {
    expect(this.veggieList).to.exist;
  });

});
