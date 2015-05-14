'use strict';

describe('Component: taskBox', function () {
    var taskBox, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        taskBox = require('./task-box.js');
        component = React.createElement(taskBox);
    });

    it('should create a new instance of <taskBox />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });
});
