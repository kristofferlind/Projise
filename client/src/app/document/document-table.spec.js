'use strict';

describe('Component: documentTable', function () {
    var documentTable, component,
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

        documentTable = require('./document-table.js');
        component = React.createElement(documentTable, {documents: testDocuments});
    });

    it('should create a new instance of <documentTable />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should present documents');
});
