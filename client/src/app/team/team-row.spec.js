'use strict';

describe('Component: teamRow', function () {
    var teamRow, component,
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

        teamRow = require('./team-row.js');
        component = React.createElement(teamRow, {team: testTeam});
    });

    it('should create a new instance of <teamRow />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should add team to project on add');
});
