'use strict';

describe('Component: editProjectModal', function () {
    var editProjectModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testProject = {
        name: 'name',
        description: 'description',
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        editProjectModal = require('./edit-project-modal.js');
        component = React.createElement(editProjectModal, {project: testProject});
    });

    it('should create a new instance of <editProjectModal />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should populate form with values from props');
    it('should disable submit when fields are empty');
    it('should disable submit when fields are invalid');
    it('should update project on submit');
    it('should be removed on close');
});
