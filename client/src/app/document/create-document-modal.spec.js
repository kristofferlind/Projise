'use strict';

describe('Component: createDocumentModal', function () {
    var createDocumentModal, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        createDocumentModal = require('./create-document-modal.js');
        component = React.createElement(createDocumentModal);
    });

    it('should create a new instance of <createDocumentModal />', function () {
        expect(component).toBeDefined();
    });

    it('should disable submit when fields are empty');
    it('should disable submit when fields are incorrect');
    it('should create document on submit');
});
