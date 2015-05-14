'use strict';

describe('Component: createSprintModal', function() {
    var createSprintModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function() {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        createSprintModal = require('./create-sprint-modal.js');
        component = React.createElement(createSprintModal);
    });

    it('should create a new instance of <createSprintModal />', function() {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should disable submit when fields are empty');
    it('should disable submit when fields are invalid');
    it('should create sprint on submit');
    it('should be removed on close');
});
