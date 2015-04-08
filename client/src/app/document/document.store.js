'use strict';

var config = require('../../config/config'),
    documentConfig = require('./document.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = documentConfig.Interactions,
    DocumentActions = documentConfig.Actions,
    Actions = config.Actions;

var _documents = [],
    _activeDocumentId = null,
    _editorDocumentId = null;

var getAll = function() {
    var documents = [];

    //Convert to array for easier use in components
    for (var documentId in _documents) {
        documents.push(_documents[documentId]);
    }

    return documents;
};

var DocumentStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return getAll();
    },
    getActiveDocument: function() {
        if (_activeDocumentId) {
            return _documents[_activeDocumentId];
        }
    },
    getEditorDocument: function() {
        if (_editorDocumentId) {
            return _documents[_editorDocumentId];
        }
        return null;
    },
    addChangeListener: function(callback) {
        DocumentStore.on(Actions.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        DocumentStore.removeListener(Actions.CHANGE, callback);
    }
});

var emitChange = function(data) {
    DocumentStore.emit(Actions.CHANGE);
};

var save = function(document) {
    if (!document) {
        return;
    }
    _documents[document._id] = document;
    emitChange();
};

var remove = function(document) {
    if (!document) {
        return;
    }

    delete _documents[document._id];
    emitChange();
};

var setDocuments = function(documents) {
    if (!documents) {
        return;
    }
    documents.forEach(function(document) {
        _documents[document._id] = document;
    });
    emitChange();
};

AppDispatcher.register(function(payload) {
    switch(payload.eventName) {
        case DocumentActions.DOCUMENTS_RECEIVED:
            setDocuments(payload.data);
            break;
        case DocumentActions.DOCUMENT_SAVED:
            save(payload.data);
            break;
        case DocumentActions.DOCUMENT_REMOVED:
            remove(payload.data);
            break;
        case Interactions.ACTIVATE_DOCUMENT:
            _activeDocumentId = payload.data._id;
            emitChange();
            break;
        case Interactions.EDIT_DOCUMENT:
            _editorDocumentId = payload.data._id;
            _activeDocumentId = payload.data._id;
            emitChange();
            break;
        case Interactions.QUIT_EDITOR:
            _editorDocumentId = null;
            emitChange();
            break;
    }

    return true;
});

module.exports = DocumentStore;
