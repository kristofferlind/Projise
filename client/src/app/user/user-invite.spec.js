'use strict';

describe('Component: userInvite', function () {
    var UserInvite, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        UserInvite = require('./user-invite.js');
        component = React.createElement(UserInvite);
    });

    it('should create a new instance of <userInvite />', function () {
        expect(component).toBeDefined();
    });

    it('should invite user on submit');
    it('should invite user on button click');
    it('should be disabled if field is empty or invalid');
});
