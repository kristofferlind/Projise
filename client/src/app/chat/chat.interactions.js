'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./chat.config'),
    Interactions = config.Interactions,
    ChatService = require('./chat.service');

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var ChatInteractions = {
    loadAll: function() {
        dispatch(Interactions.LOAD_MESSAGES);
        ChatService.getAll();
    },
    create: function(message) {
        dispatch(Interactions.CREATE_MESSAGE, message);
        ChatService.create(message);
    },
    update: function(message) {
        dispatch(Interactions.UPDATE_MESSAGE, message);
        ChatService.update(message);
    },
    delete: function(message) {
        dispatch(Interactions.DELETE_MESSAGE, message);
        ChatService.delete(message);
    }
};

module.exports = ChatInteractions;
