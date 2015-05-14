'use strict';

describe('Page: planSprintPage', function () {
    var storyBox, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        storyBox = require('./plan-sprint.page.js');
        component = React.createElement(storyBox);
    });

    it('should create a new instance of <storyBox />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should fetch backlog stories on load');
    it('should fetch sprint stories on load');
    it('should fetch backlog stories on story change');
    it('should fetch sprint stories on story change');
});
