'use strict';

describe('Component: sprintList', function () {
    var sprintList, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testSprint = {
        name: 'name',
        description: 'description',
    };

    var testSprints = [testSprint, testSprint];

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        sprintList = require('./sprint-list.js');
        component = React.createElement(sprintList, {sprints: testSprints});
    });

    it('should create a new instance of <sprintList />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });
});
