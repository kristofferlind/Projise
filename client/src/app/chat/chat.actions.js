'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./chat.config'),
    Actions = config.Actions;

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var ChatActions = {
    messagesReceived: function(messages) {
        dispatch(Actions.MESSAGES_RECEIVED, messages);
    },
    created: function(message) {
        dispatch(Actions.MESSAGE_SAVED, message);
    },
    updated: function(message) {
        dispatch(Actions.MESSAGE_SAVED, message);
    },
    deleted: function(message) {
        dispatch(Actions.MESSAGE_REMOVED, message);
    }
};

module.exports = ChatActions;
