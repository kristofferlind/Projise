'use strict';

describe('Component: projectTable', function () {
    var projectTable, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testProject = {
        name: 'name',
        description: 'description',
    };

    var testProjects = [testProject, testProject];

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        projectTable = require('./project-table.js');
        component = React.createElement(projectTable, {projects: testProjects});
    });

    it('should create a new instance of <projectTable />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should present projects based on props');
});
