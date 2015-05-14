'use strict';

describe('Component: documentToolbar', function () {
    var documentToolbar, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        documentToolbar = require('./document-toolbar.js');
        component = React.createElement(documentToolbar);
    });

    it('should create a new instance of <documentToolbar />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should open create modal on create');
});
