'use strict';

var config = require('../../config/config'),
    APIEndpoints = config.APIEndpoints,
    APIService = require('../api.service'),
    DocumentActions = require('./document.actions'),
    SessionStore = require('../account/session.store');

var DocumentService = {
    getAll: function() {
        APIService.get(APIEndpoints.DOCUMENTS, function(data) {
            DocumentActions.documentsReceived(data);
        });
    },
    create: function(document) {
        APIService.post(APIEndpoints.DOCUMENTS, document, function(data) {
            DocumentActions.created(data);
        });
    },
    update: function(document) {
        // var url = APIEndpoints.DOCUMENTS + '/' + document._id;
        APIService.put(APIEndpoints.DOCUMENTS, document, function(data) {
            DocumentActions.updated(data);
        });
    },
    delete: function(document) {
        var url = APIEndpoints.DOCUMENTS + '/' + document._id;
        APIService.delete(url, document, function(data) {
            DocumentActions.deleted(document);
        });
    }
};

module.exports = DocumentService;
