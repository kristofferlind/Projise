'use strict';

describe('Component: userRow', function () {
    var UserRow, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testUser = {
        username: 'username',
        email: 'email'
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        UserRow = require('./user-row.js');
        component = React.createElement(UserRow, {user: testUser});
    });

    it('should create a new instance of <userRow />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });
});
