'use strict';

/*global $*/

//https://github.com/JustMaier/angular-signalr-hub, modified to work without angular and look a bit nicer.
//Also has some additional logic for keeping track of connectivity.

var TokenService = require('./token.service');

var connection = null,
    connect = function (options) {
        var connection = null;
        if (options && options.rootPath) {
            connection = $.hubConnection(options.rootPath, { useDefaultPath: false });
        } else {
            connection = $.hubConnection();
        }

        connection.logging = (options && options.logging ? true : false);

        return connection;
    },
    getConnection = function (options) {
        if (connection === null) {
            connection = connect(options);
        }
        return connection;
    };

var createHub = function(hubName, options) {
    var Hub = {};
    Hub.connection = getConnection(options);
    Hub.proxy = Hub.connection.createHubProxy(hubName);

    Hub.on = function (event, fn) {
        Hub.proxy.on(event, fn);
    };
    Hub.invoke = function (method, args) {
        return Hub.proxy.invoke.apply(Hub.proxy, arguments);
    };
    Hub.disconnect = function () {
        Hub.connection.stop();
    };
    Hub.connect = function () {
        Hub.connection.qs = {
            token: TokenService.getToken()
        };
        Hub.connection.start();
    };

    Hub.stateChangedListener = function(callback) {
        Hub.connection.stateChanged(function(state) {
            callback(state);
        });
    };

    if (options && options.listeners) {
        Object.keys(options.listeners).forEach(function(listenerKey) {
            var event = listenerKey;
            var fn = options.listeners[listenerKey];
            Hub.on(event, fn);
        });
    }

    if (options && options.methods) {
        Object.keys(options.methods).forEach(function(method) {
            Hub[method] = function () {
                var args = $.makeArray(arguments);
                args.unshift(method);
                return Hub.invoke.apply(Hub, args);
            };
        });
    }

    if (options && options.queryParams) {
        Hub.connection.qs = options.queryParams;
    }

    if (options && options.errorHandler) {
        Hub.connection.error(options.errorHandler);
    }

    return Hub;
};

module.exports = createHub;
