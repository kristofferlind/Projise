'use strict';

describe('Component: taskToolbar', function () {
    var taskToolbar, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        taskToolbar = require('./task-toolbar.js');
        component = React.createElement(taskToolbar);
    });

    it('should create a new instance of <taskToolbar />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should disable submit when field is empty');
    it('should disable submit when field is invalid');
    it('should add task to story on submit');
});
