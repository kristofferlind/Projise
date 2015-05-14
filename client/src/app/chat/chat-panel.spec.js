'use strict';

describe('Component: chatPanel', function () {
    var chatPanel, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        chatPanel = require('./chat-panel.js');
        component = React.createElement(chatPanel);
    });

    it('should create a new instance of <chatPanel />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    describe('message form', function() {
        it('should send message on submit');
        it('should be disabled when message is empty');
    });

    describe('message list', function() {
        it('should present messages');
        it('should present clickable links');
    });
});
