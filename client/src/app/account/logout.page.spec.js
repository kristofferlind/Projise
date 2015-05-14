'use strict';

describe('Page: logoutPage', function () {
    var logoutPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils,
        routerStub = require('../react-router.stub');

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        logoutPage = require('./logout.page.js');
        var wrappedComponent = routerStub(logoutPage);
        component = React.createElement(wrappedComponent);
    });

    it('should create a new instance of <logoutPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should logout on request');
});
