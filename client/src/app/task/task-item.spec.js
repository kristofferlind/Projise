'use strict';

describe('Component: taskItem', function () {
    var taskItem, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testTask = {
        name: 'test',
        description: 'desc',
        isDone: false
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        taskItem = require('./task-item.js');
        component = React.createElement(taskItem, {task: testTask});
    });

    it('should create a new instance of <taskItem />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should run toggle action on toggle');
    it('should remove task on delete');
});
