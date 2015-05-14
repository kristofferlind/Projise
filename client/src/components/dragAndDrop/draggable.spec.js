'use strict';

describe('Component: draggable', function () {
    var draggable, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        draggable = require('./draggable.js');
        component = React.createElement(draggable);
    });

    it('should create a new instance of <draggable />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should transfer payload')
});
