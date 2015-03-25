'use strict';

var config = require('../config/config'),
    request = require('superagent'),
    APIEndpoints = config.APIEndpoints;

var getToken = function() {
        return localStorage.token;
    },
    removeToken = function() {
        delete localStorage.token;
    },
    handleErrors = function(error, response) {
        console.log('error: ', error);
        console.log('response: ', response);
    };

var APIService = {
    login: function(username, password, callback) {
        //endpoint doesn't support json, need to do a form post
        request.post(APIEndpoints.LOGIN)
            .type('form')
            .send({grant_type: 'password'})
            .send({username: username})
            .send({password: password})
            .end(function(error, response) {
                if (error || response.error) {
                    handleErrors(error, response);
                    callback(error, null);
                    return;
                }
                callback(null, response.body);
            });
    },
    register: function(email, password, confirmPassword, callback) {
        request.post(APIEndpoints.REGISTER)
            .send({Email: email, Password: password, ConfirmPassword: confirmPassword})
            .end(function(error, response) {
                if (error || response.error) {
                    handleErrors(error, response);
                    callback(error, null);
                    return;
                }
                callback(null, response.body);
            });
    }
};

module.exports = APIService;
