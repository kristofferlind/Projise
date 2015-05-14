'use strict';

describe('Component: navPanel', function () {
    var navPanel, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        navPanel = require('./nav-panel.js');
        component = React.createElement(navPanel);
    });

    it('should create a new instance of <navPanel />', function () {
        expect(component).toBeDefined();
    });


    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should be marked active when open');
    it('should not be marked active when closed');
});
