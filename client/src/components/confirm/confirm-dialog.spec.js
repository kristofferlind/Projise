'use strict';

describe('Component: confirmDialog', function () {
    var confirmDialog, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        confirmDialog = require('./confirm-dialog.js');
        component = React.createElement(confirmDialog);
    });

    it('should create a new instance of <confirmDialog />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });
});
