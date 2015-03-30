'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('../../config/config'),
    Actions = config.Actions;

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var SessionActions = {
    userReceived: function(user) {
        dispatch(Actions.USER_RECEIVED, user);
    }
};

module.exports = SessionActions;
