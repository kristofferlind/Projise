'use strict';

describe('Component: teamTable', function () {
    var teamTable, component,
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

        teamTable = require('./team-table.js');
        component = React.createElement(teamTable, {teams: testTeams});
    });

    it('should create a new instance of <teamTable />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });
});
