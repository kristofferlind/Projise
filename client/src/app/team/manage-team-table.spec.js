'use strict';

describe('Component: manageTeamTable', function () {
    var manageTeamTable, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testTeam = {
        name: 'name',
        description: 'description',
    };

    var testTeams = [testTeam, testTeam];

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        manageTeamTable = require('./manage-team-table.js');
        component = React.createElement(manageTeamTable, {teams: testTeams});
    });

    it('should create a new instance of <manageTeamTable />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });
});
