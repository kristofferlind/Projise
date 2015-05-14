'use strict';

describe('Component: manageTeamBox', function () {
    var manageTeamBox, component,
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

        manageTeamBox = require('./manage-team-box.js');
        component = React.createElement(manageTeamBox, {teams: testTeams});
    });

    it('should create a new instance of <manageTeamBox />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should filter teams based on filterText');
});
