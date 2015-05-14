'use strict';

describe('Page: loginPage', function () {
    var loginPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        routerStub = require('../react-router.stub');

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        loginPage = require('./login.page.js');
        var wrappedComponent = routerStub(loginPage);
        component = React.createElement(wrappedComponent);
    });

    it('should create a new instance of <loginPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should call login on submit');
    it('should be disabled when fields are empty');
    it('should present errors');
});
