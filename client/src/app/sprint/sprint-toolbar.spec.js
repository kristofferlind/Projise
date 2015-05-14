'use strict';

describe('Component: sprintToolbar', function () {
    var sprintToolbar, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        sprintToolbar = require('./sprint-toolbar.js');
        component = React.createElement(sprintToolbar);
    });

    it('should create a new instance of <sprintToolbar />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should open create sprint modal on create');
});
