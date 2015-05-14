'use strict';

describe('Page: manageDocumentsPage', function () {
    var manageDocumentsPage, component,
        React = require('react/addons'),
        TestUtils = React.addons.TestUtils;

    beforeEach(function () {
        var container = document.createElement('div');

        container.id = 'content';
        document.body.appendChild(container);

        manageDocumentsPage = require('./manage-documents.page.js');
        component = React.createElement(manageDocumentsPage);
    });

    it('should create a new instance of <manageDocumentsPage />', function () {
        expect(component).toBeDefined();
    });

    it('should render without crashing', function() {
        TestUtils.renderIntoDocument(component);
    });

    it('should fetch documents on load');
    it('should render without problems');
});
