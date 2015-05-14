'use strict';

describe('Component: userTable', function () {
    var UserTable, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testUser = {
        username: 'username',
        email: 'email'
    };

    var testUsers = [testUser, testUser];

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        UserTable = require('./user-table.js');
        component = React.createElement(UserTable, {users: testUsers});
    });

    it('should create a new instance of <userTable />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });
});
