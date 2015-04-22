'use strict';

var NotificationConstants = require('./notifications.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    NotificationTypes = NotificationConstants.Types,
    NotificationActions = NotificationConstants.Actions,
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign');


var _notifications = [];

var NotificationStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _notifications;
    },
    addChangeListener: function(callback) {
        NotificationStore.on(NotificationActions.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        NotificationStore.removeListener(NotificationActions.CHANGE, callback);
    }
});

var emitChange = function(data) {
    NotificationStore.emit(NotificationActions.CHANGE);
};

var removeNotification = function(notification) {
    var notificationIndex = _notifications.indexOf(notification);
    if (notificationIndex > -1) {
        _notifications.splice(notificationIndex, 1);
        emitChange();
    }
};

var addNotification = function(notification) {
    _notifications.push(notification);
    setTimeout(function() {
        removeNotification(notification);
    }, 5000);
    emitChange();
};

AppDispatcher.register(function(payload) {
    switch(payload.eventName) {
        case NotificationActions.RECEIVE_NOTIFICATION:
            addNotification(payload.data);
            break;
        case NotificationActions.REMOVE_NOTIFICATION:
            removeNotification(payload.data);
            break;
    }

    return true;
});

module.exports = NotificationStore;
