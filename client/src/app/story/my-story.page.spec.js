'use strict';

describe('Page: myStoryPage', function () {
    var myStoryPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        myStoryPage = require('./my-story.page.js');
        component = React.createElement(myStoryPage);
    });

    it('should create a new instance of <myStoryPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should fetch backlog stories on load');
    it('should fetch sprint stories on load');
    it('should fetch backlog stories on story changes');
    it('should fetch sprint stories on story changes');
    it('should require an active sprint to load');
    it('should assign story to user when dropping in dropzone');
    it('should cancel story when dragging from my story to backlog');
    it('should complete story when dragging from my story to completed stories');
    it('should show active story when active story is set');
    it('should show dropzone when no story is active');
});
