'use strict';

describe('Component: sprintItem', function () {
    var sprintItem, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testSprint = {
        name: 'name',
        description: 'description',
        start: Date.now(),
        end: Date.now()
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        sprintItem = require('./sprint-item.js');
        component = React.createElement(sprintItem, {sprint: testSprint});
    });

    it('should create a new instance of <sprintItem />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should set status of previous sprints to bg-success');
    it('should set status of current sprint to bg-warning');
    it('should set status of upcoming sprints to bg-danger');
    it('should open edit modal on edit');
    it('should remove sprint on delete');
});
