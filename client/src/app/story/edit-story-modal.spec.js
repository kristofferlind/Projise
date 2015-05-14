'use strict';

describe('Component: editStoryModal', function () {
    var editStoryModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testStory = {
        name: 'name',
        description: 'description'
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        editStoryModal = require('./edit-story-modal.js');
        component = React.createElement(editStoryModal, {story: testStory});
    });

    it('should create a new instance of <editStoryModal />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should disable submit when fields are empty');
    it('should disable submit when fields are invalid');
    it('should update story on submit');
    it('should be removed on close');
});
