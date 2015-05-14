'use strict';

describe('Component: projectBox', function () {
    var projectBox, component,
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

        projectBox = require('./project-box.js');
        component = React.createElement(projectBox, {projects: testProjects});
    });

    it('should create a new instance of <projectBox />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should filter projects based on filterText');
    it('should populate project table with filtered projects');
});
