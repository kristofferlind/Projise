'use strict';

describe('Component: notificationList', function () {
    var notificationList, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        notificationList = require('./notification-list.js');
        component = React.createElement(notificationList);
    });

    it('should create a new instance of <notificationList />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should fetch notifications on load');
    it('should fetch notifications on notification change');
    it('should present notifications');
});
