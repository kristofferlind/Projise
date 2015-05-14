'use strict';

describe('Component: projectToolbar', function () {
    var projectToolbar, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        projectToolbar = require('./project-toolbar.js');
        component = React.createElement(projectToolbar);
    });

    it('should create a new instance of <projectToolbar />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should open create project modal on create');
});
