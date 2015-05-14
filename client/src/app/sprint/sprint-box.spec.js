'use strict';

describe('Component: sprintBox', function () {
    var sprintBox, component,
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

        sprintBox = require('./sprint-box.js');
        component = React.createElement(sprintBox, {sprints: testSprints});
    });

    it('should create a new instance of <sprintBox />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should filter sprints based on filterText');
    it('should populate sprintList with filtered sprints');
});
