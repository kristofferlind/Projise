'use strict';

describe('Component: documentBox', function () {
    var documentBox, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testDocument = {
        name: 'name',
        description: 'description',
        data: 'test'
    };

    var testDocuments = [testDocument, testDocument];

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        documentBox = require('./document-box.js');
        component = React.createElement(documentBox, {documents: testDocuments});
    });

    it('should create a new instance of <documentBox />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should present documents');
    it('should present documents containing filtertext');
});
