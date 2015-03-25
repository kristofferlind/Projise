'use strict';

var APIService = require('./api.service');

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
        if (localStorage.token) {
            callback(true);
            return;
        }
        APIService.login(username, password, function(err, data) {
            if (err) {
                callback(false);
            } else {
                // console.log(data);
                var token = data.access_token;
                localStorage.token = token;
                callback(true);
            }
        });
    },
    logout: function(callback) {
        delete localStorage.token;
        if (callback) {
            callback();
        }
    },
    isLoggedIn: function() {
        return !!localStorage.token;
    },
    getToken: function() {
        return localStorage.token;
    },
    onChange: function() {}
};

module.exports = AuthenticationService;
