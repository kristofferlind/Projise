'use strict';

var config = {
    Actions: {
        DOCUMENTS_RECEIVED: 'DOCUMENTS_RECEIVED',
        DOCUMENT_ACTIVATED: 'DOCUMENT_ACTIVATED',
        DOCUMENT_SAVED: 'document-saved',
        DOCUMENT_REMOVED: 'document-removed'
    },
    Interactions: {
        LOAD_DOCUMENTS: 'LOAD_DOCUMENTS',
        CREATE_DOCUMENT: 'CREATE_DOCUMENT',
        UPDATE_DOCUMENT: 'UPDATE_DOCUMENT',
        DELETE_DOCUMENT: 'DELETE_DOCUMENT',
        ACTIVATE_DOCUMENT: 'ACTIVATE_DOCUMENT',
        EDIT_DOCUMENT: 'EDIT_DOCUMENT',
        QUIT_EDITOR: 'QUIT_EDITOR'
    }
};

module.exports = config;
