'use strict';

describe('Component: notification', function () {
    var notification, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        notification = require('./notification.js');
        component = React.createElement(notification, {notification: {type: 'success', text: 'test'}});
    });

    it('should create a new instance of <notification />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should remove notification on dismiss');
});
