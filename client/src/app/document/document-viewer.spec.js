'use strict';

describe('Component: documentViewer', function () {
    var documentViewer, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        documentViewer = require('./document-viewer.js');
        component = React.createElement(documentViewer);
    });

    it('should create a new instance of <documentViewer />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should present markdown document');
    it('should follow cursor in editor');
});
