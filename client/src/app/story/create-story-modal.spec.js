'use strict';

describe('Component: createStoryModal', function () {
    var createStoryModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        createStoryModal = require('./create-story-modal.js');
        component = React.createElement(createStoryModal);
    });

    it('should create a new instance of <createStoryModal />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should disable submit when fields are empty');
    it('should disable submit when fields are invalid');
    it('should create story on submit');
    it('should be removed on close');
});
