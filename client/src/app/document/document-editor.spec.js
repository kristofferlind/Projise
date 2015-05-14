'use strict';

describe('Component: documentEditor', function () {
    var documentEditor, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    var testDocument = {
        name: 'name',
        description: 'description',
        data: 'test'
    };

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        documentEditor = require('./document-editor.js');
        component = React.createElement(documentEditor, {document: testDocument});
    });

    it('should create a new instance of <documentEditor />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should present document');
    it('should save document on edit');
    it('should leave editor on quit');
});
