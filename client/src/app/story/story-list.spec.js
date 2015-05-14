'use strict';

describe('Component: storyList', function () {
    var storyList, component,
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

        storyList = require('./story-list.js');
        component = React.createElement(storyList, {stories: testStories});
    });

    it('should create a new instance of <storyList />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should present stories');
    it('should run onDrop action if present');
    it('should add story to sprint backlog on drop when set as sprint backlog');
    it('should present a message if no stories are present');
});
