'use strict';

describe('Page: registerPage', function () {
    var registerPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        routerStub = require('../react-router.stub');

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        registerPage = require('./register.page.js');
        var wrappedComponent = routerStub(registerPage);
        component = React.createElement(wrappedComponent);
    });

    it('should create a new instance of <registerPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should register on submit');
    it('should be disabled when fields are empty');
    it('should be disabled when fields are incorrect');
    it('should notify user on success');
    it('should redirect user on success');
    it('should present errors on failure');
});
