'use strict';

describe('Page: manageTeamsPage', function () {
    var manageTeamsPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        manageTeamsPage = require('./manage-teams.page.js');
        component = React.createElement(manageTeamsPage);
    });

    it('should create a new instance of <manageTeamsPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should fetch teams on load');
    it('should fetch teams on team change');
});
