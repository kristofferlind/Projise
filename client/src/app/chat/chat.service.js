'use strict';

var config = require('../../config/config'),
    APIEndpoints = config.APIEndpoints,
    APIService = require('../api.service'),
    ChatActions = require('./chat.actions');

var ChatService = {
    getAll: function() {
        APIService.get(APIEndpoints.MESSAGES, function(data) {
            ChatActions.messagesReceived(data);
        });
    },
    create: function(message) {
        APIService.post(APIEndpoints.MESSAGES, message, function(data) {
            ChatActions.created(data);
        });
    },
    update: function(message) {
        var url = APIEndpoints.MESSAGES + '/' + message._id;
        APIService.put(url, message, function(data) {
            ChatActions.updated(data);
        });
    },
    delete: function(message) {
        var url = APIEndpoints.MESSAGES + '/' + message._id;
        APIService.delete(url, message, function(data) {
            ChatActions.deleted(message);
        });
    }
};

module.exports = ChatService;
