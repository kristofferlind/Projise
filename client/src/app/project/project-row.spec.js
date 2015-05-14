'use strict';

describe('Component: projectRow', function () {
    var projectRow, component,
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

        projectRow = require('./project-row.js');
        component = React.createElement(projectRow, {project: testProject});
    });

    it('should create a new instance of <projectRow />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should open edit modal on edit');
    it('should remove project on delete');
    it('should activate project on activate');
    it('should show buttons when project is not active');
    it('should not show buttons when project is active');
});
