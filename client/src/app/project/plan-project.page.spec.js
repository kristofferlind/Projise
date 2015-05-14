'use strict';

describe('Page: planProjectPage', function () {
    var planProjectPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        planProjectPage = require('./plan-project.page.js');
        component = React.createElement(planProjectPage);
    });

    it('should create a new instance of <planProjectPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should fetch sprints on load');
    it('should fetch sprints on sprint updates');
    it('should fetch stories on load');
    it('should fetch stories on story updates');
});
