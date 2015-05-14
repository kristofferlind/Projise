'use strict';

describe('Component: editDocumentModal', function () {
    var editDocumentModal, component,
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

        editDocumentModal = require('./edit-document-modal.js');
        component = React.createElement(editDocumentModal, {document: testDocument});
    });

    it('should create a new instance of <editDocumentModal />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should update document on submit');
    it('should disable submit button when fields are invalid');
});
