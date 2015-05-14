'use strict';

describe('Component: dropzone', function () {
    var dropzone, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        dropzone = require('./dropzone.js');
        component = React.createElement(dropzone);
    });

    it('should create a new instance of <dropzone />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    describe('handleDrop', function() {
        it('should run onDrop action when payload type matches accept type');
        it('should do nothing when payload type does not match accept type');
    });
});
