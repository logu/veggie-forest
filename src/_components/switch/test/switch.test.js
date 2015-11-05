var Switch = require('../index');

describe('Component : Switch', function() {
    beforeEach(function() {
        this.component = new Switch();
        this.view = this.component.getView();
        this.model = this.component.getModel();
    });

    it('should initialize state to true', function() {
        this.component.getState().should.eql(true);
    });

    it('should set and toggle state correctly', function() {
        this.component.setState(true);
        this.component.toggleState();
        this.component.getState().should.eql(false);
    });

    it('should set a given state by sending a boolean value', function() {
        this.model.set('onValue', 'On value');
        this.model.set('offValue', 'Off value');

        this.component.setState(true);
        this.component.getSelectedValue().should.eql('On value');
    });

    it('should set a given state by sending the string value', function(){
        this.model.set('onValue', 'On value');
        this.model.set('offValue', 'Off value');

        this.component.setState('On value');
        this.component.getSelectedValue().should.eql('On value');
    })

});
