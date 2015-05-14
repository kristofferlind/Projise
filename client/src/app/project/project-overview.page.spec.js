'use strict';

describe('Page: projectOverviewPage', function () {
    var projectOverviewPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        projectOverviewPage = require('./project-overview.page.js');
        component = React.createElement(projectOverviewPage);
    });

    it('should create a new instance of <projectOverviewPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });
});
