'use strict';

describe('Component: createTeamModal', function () {
    var createTeamModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        createTeamModal = require('./create-team-modal.js');
        component = React.createElement(createTeamModal);
    });

    it('should create a new instance of <createTeamModal />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should disable submit when fields are empty');
    it('should disable submit when fields are invalid');
    it('should create team on submit');
    it('should be removed on close');
});
