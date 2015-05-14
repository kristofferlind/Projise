'use strict';

describe('Component: taskList', function () {
    var taskList, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        taskList = require('./task-list.js');
        component = React.createElement(taskList);
    });

    it('should create a new instance of <taskList />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should toggle isDone for task when toggling');
    it('should remove task on remove');
    it('should present tasks');
    it('should present a message when no tasks are present');
});
