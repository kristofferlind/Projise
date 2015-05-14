'use strict';

describe('Component: createProjectModal', function () {
    var createProjectModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        createProjectModal = require('./create-project-modal.js');
        component = React.createElement(createProjectModal);
    });

    it('should create a new instance of <createProjectModal />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should disable submit when fields are empty');
    it('should disable submit when fields are invalid');
    it('should create project on submit');
    it('should be removed on close');
});
