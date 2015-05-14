'use strict';

describe('Component: storyItem', function () {
    var storyItem, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testStory = {
        name: 'name',
        description: 'description',
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        storyItem = require('./story-item.js');
        component = React.createElement(storyItem, {story: testStory});
    });

    it('should create a new instance of <storyItem />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should open edit modal on edit');
    it('should remove story on delete');
    it('should set style based on status');
    it('should set style when sprint is part of current sprint backlog');

    describe('Prioritization', function() {
        it('should set priority 1 above when dropping lower priority story');
        it('should set priority 1 below when dropping higher priority story');
    });
});
