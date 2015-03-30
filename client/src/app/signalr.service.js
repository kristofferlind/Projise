'use strict';

var Hub = require('./signalr.hub'),
    AppDispatcher = require('./app-dispatcher'),
    config = require('../config/config');

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var onChange = function(operation, type, item, operationId) {
    //Example events: 'project-saved', 'project-removed'
    var eventName = type + '-' + operation + 'd';
    var data = item;

    dispatch(eventName, data);
};

var handleError = function(error) {
    console.log(error);
};

var hub = Hub('projectHub', {
    listeners: {
        onChange: onChange
    },
    rootPath: config.Urls.SIGNALR,
    logging: config.DEBUG,
    errorHandler: handleError
});

var SignalRService = {
    connect: hub.connect,
    disconnect: hub.disconnect,
    stateChanged: function(state) {
        //use this to set connection status somewhere..
        // console.log(state);
    }
};

hub.stateChangedListener(function(state) {
    SignalRService.stateChanged(state);
});

module.exports = SignalRService;
