'use strict';

describe('Component: storyBox', function () {
    var storyBox, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testStory = {
        name: 'name',
        description: 'description',
    };

    var testStories = [testStory, testStory];

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        storyBox = require('./story-box.js');
        component = React.createElement(storyBox, {stories: testStories});
    });

    it('should create a new instance of <storyBox />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should filter stories based on filterText and filterOptions');
});
