'use strict';

describe('Component: documentRow', function () {
    var documentRow, component,
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

        documentRow = require('./document-row.js');
        component = React.createElement(documentRow, {document: testDocument});
    });

    it('should create a new instance of <documentRow />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should open edit modal on edit meta');
    it('should remove document on delete');
    it('should show buttons');
    it('should not show buttons when document is active');
    it('should open editor on edit document');
    it('should activate document on activate');
});
