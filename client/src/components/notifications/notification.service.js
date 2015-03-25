'use strict';

var NotificationConstants = require('./notifications.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    NotificationTypes = NotificationConstants.Types,
    NotificationActions = NotificationConstants.Actions;

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var sendNotification = function(type, text) {
    var notification = {
        type: type,
        text: text
    };

    dispatch(NotificationActions.RECEIVE_NOTIFICATION, notification);
};

var NotificationService = {
    danger: function(text) {
        sendNotification(NotificationTypes.DANGER, text);
    },
    info: function(text) {
        sendNotification(NotificationTypes.INFO, text);
    },
    success: function(text) {
        sendNotification(NotificationTypes.SUCCESS, text);
    },
    warning: function(text) {
        sendNotification(NotificationTypes.WARNING, text);
    }
};

module.exports = NotificationService;
