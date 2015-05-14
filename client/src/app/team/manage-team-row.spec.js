'use strict';

describe('Component: manageTeamRow', function () {
    var manageTeamRow, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testTeam = {
        name: 'name',
        description: 'description',
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        manageTeamRow = require('./manage-team-row.js');
        component = React.createElement(manageTeamRow, {team: testTeam});
    });

    it('should create a new instance of <manageTeamRow />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should not render buttons when row is active team');
    it('should render buttons when row is not active team');
    it('should activate team on activate');
    it('should open edit team modal on edit');
    it('should remove team on delete');
});
