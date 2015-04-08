'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication'),
    DocumentInteractions = require('./document.interactions'),
    DocumentStore = require('./document.store'),
    DocumentTable = require('./document-table'),
    DocumentToolbar = require('./document-toolbar'),
    DocumentViewer = require('./document-viewer'),
    DocumentEditor = require('./document-editor');

require('./document.scss');

var ManageDocumentsPage = React.createClass({
    mixins: [RequireAuthentication],
    getInitialState: function() {
        return {
            documents: DocumentStore.getAll(),
            activeDocument: DocumentStore.getActiveDocument(),
            editorDocument: DocumentStore.getEditorDocument()
        };
    },
    componentDidMount: function() {
        DocumentStore.addChangeListener(this.onDocumentChange);
        DocumentInteractions.loadAll();
    },
    componentWillUnmount: function() {
        DocumentStore.removeChangeListener(this.onDocumentChange);
    },
    onDocumentChange: function() {
        this.setState({
            documents: DocumentStore.getAll(),
            activeDocument: DocumentStore.getActiveDocument(),
            editorDocument: DocumentStore.getEditorDocument()
        });
    },
    render: function() {
        var component = this;
        var shouldShowEditor = function() {
            if (component.state.editorDocument) {
                return (
                    <div className='document-section'>
                        <DocumentEditor document={component.state.editorDocument} />
                    </div>
                );
            } else {
                return (
                    <div className='document-section'>
                        <DocumentToolbar />
                        <DocumentTable documents={component.state.documents} />
                    </div>
                );
            }
        };
        return (
            <main>
                <h1>Manage documents</h1>
                <div className='document-container'>
                    {shouldShowEditor()}
                    <div className='document-section'>
                        <DocumentViewer document={this.state.activeDocument} />
                    </div>
                </div>
            </main>
        );
    }
});

module.exports = ManageDocumentsPage;
