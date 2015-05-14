'use strict';

describe('Component: editSprintModal', function() {
    var editSprintModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testSprint = {
        name: 'name',
        description: 'description',
        start: Date.now().toString(),
        end: Date.now().toString()
    };

    beforeEach(function() {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        editSprintModal = require('./edit-sprint-modal.js');
        component = React.createElement(editSprintModal, {sprint: testSprint});
    });

    it('should create a new instance of <editSprintModal />', function() {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should disable submit when fields are empty');
    it('should disable submit when fields are invalid');
    it('should update sprint on submit');
    it('should be removed on close');
});
