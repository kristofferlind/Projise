'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./document.config'),
    Actions = config.Actions;

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var DocumentActions = {
    documentsReceived: function(documents) {
        dispatch(Actions.DOCUMENTS_RECEIVED, documents);
    },
    created: function(document) {
        dispatch(Actions.DOCUMENT_SAVED, document);
    },
    updated: function(document) {
        dispatch(Actions.DOCUMENT_SAVED, document);
    },
    deleted: function(document) {
        dispatch(Actions.DOCUMENT_REMOVED, document);
    }
};

module.exports = DocumentActions;
