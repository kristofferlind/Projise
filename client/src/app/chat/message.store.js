'use strict';

var config = require('../../config/config'),
    messageConfig = require('./chat.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = messageConfig.Interactions,
    MessageActions = messageConfig.Actions,
    Actions = config.Actions;

var _messages = [];

var getAll = function() {
    var messages = [];

    //Convert to array for easier use in components
    for (var messageId in _messages) {
        messages.push(_messages[messageId]);
    }

    return messages;
};

var MessageStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return getAll();
    },
    addChangeListener: function(callback) {
        MessageStore.on(Actions.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        MessageStore.removeListener(Actions.CHANGE, callback);
    }
});

var emitChange = function(data) {
    MessageStore.emit(Actions.CHANGE);
};

var save = function(message) {
    if (!message) {
        return;
    }
    _messages[message._id] = message;
    emitChange();
};

var remove = function(message) {
    if (!message) {
        return;
    }

    delete _messages[message._id];
    emitChange();
};

var setMessages = function(messages) {
    if (!messages) {
        return;
    }

    //Clear to make sure no old stuff stays
    _messages = [];

    messages.forEach(function(message) {
        _messages[message._id] = message;
    });
    emitChange();
};

AppDispatcher.register(function(payload) {
    switch(payload.eventName) {
        case MessageActions.MESSAGES_RECEIVED:
            setMessages(payload.data);
            break;
        case MessageActions.MESSAGE_SAVED:
            save(payload.data);
            break;
        case MessageActions.MESSAGE_REMOVED:
            remove(payload.data);
            break;
    }

    return true;
});

module.exports = MessageStore;
