'use strict';

describe('Component: editTeamModal', function () {
    var editTeamModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testTeam = {
        name: 'name',
        description: 'description'
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        editTeamModal = require('./edit-team-modal.js');
        component = React.createElement(editTeamModal, {team: testTeam});
    });

    it('should create a new instance of <editTeamModal />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should disable submit when fields are empty');
    it('should disable submit when fields are invalid');
    it('should update team on submit');
    it('should be removed on close');
});
