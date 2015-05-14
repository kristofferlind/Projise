'use strict';

describe('Component: storyToolbar', function () {
    var storyToolbar, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testOptions = {
        completed: true,
        inProgress: true,
        notStarted: true
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        storyToolbar = require('./story-toolbar.js');
        component = React.createElement(storyToolbar, {filterOptions: testOptions});
    });

    it('should create a new instance of <storyToolbar />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should open create modal on create');
    it('should show create button when prop is true');
    it('should not show create button when prop is false');

    describe('filterOptions', function() {
        it('should set completed to true when false');
        it('should set completed to false when true');
        it('should set in progress to true when false');
        it('should set in progress to false when true');
        it('should set not started to true when false');
        it('should set not started to false when true');
        it('should set all to true on show all');
    });
});
