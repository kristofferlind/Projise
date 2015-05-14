'use strict';

describe('Component: teamToolbar', function () {
    var teamToolbar, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        teamToolbar = require('./team-toolbar.js');
        component = React.createElement(teamToolbar);
    });

    it('should create a new instance of <teamToolbar />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should open create team modal on create');
});
