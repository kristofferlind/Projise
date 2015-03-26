'use strict';

var APIService = require('./api.service'),
    TokenService = require('./token.service'),
    Notify = require('../components/notifications/notification.service');

var AuthenticationService = {
    register: function(email, password, confirmPassword, callback) {
        APIService.register(email, password, confirmPassword, function(err, data) {
            if (err) {
                callback(false);
            } else {
                callback(true);
            }
        });
    },
    login: function(username, password, callback) {
        if (username && password) {
            APIService.login(username, password, function(err, data) {
                if (err) {
                    callback(false);
                } else {
                    TokenService.setToken(data.access_token, data.expires_in);
                    callback(true);
                }
            });
        } else {
            if (!username) {
                Notify.warning('You need to provide a username.');
            }
            if (!password) {
                Notify.warning('You need to provide a password.');
            }
        }
    },
    logout: function(callback) {
        delete localStorage.token;
        if (callback) {
            callback();
        }
    },
    isLoggedIn: function() {
        return !!AuthenticationService.getToken();
    },
    getToken: function() {
        return TokenService.getToken();
    }
};

module.exports = AuthenticationService;
