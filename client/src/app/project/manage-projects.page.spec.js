'use strict';

describe('Page: manageProjectsPage', function () {
    var manageProjectsPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        manageProjectsPage = require('./manage-projects.page.js');
        component = React.createElement(manageProjectsPage);
    });

    it('should create a new instance of <manageProjectsPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should fetch teams on load');
    it('should fetch teams on team updates');
    it('should fetch projects on load');
    it('should fetch projects on project updates');
    it('should populate user table with users from active project');
});
