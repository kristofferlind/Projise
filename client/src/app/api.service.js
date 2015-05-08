'use strict';

var config = require('../config/config'),
    request = require('superagent'),
    APIEndpoints = config.APIEndpoints,
    Notify = require('../components/notifications/notification.service'),
    TokenService = require('./token.service'),
    ProjectActions = require('./project/project.actions');

var getToken = function() {
        return localStorage.token;
    },
    removeToken = function() {
        delete localStorage.token;
    },
    presentError = function(model, modelErrors) {
        if (modelErrors) {
            console.log(model, modelErrors);
            modelErrors.forEach(function(error) {
                Notify.danger(error);
            });
        }
    },
    presentErrors = function(response) {
        if (response && response.body && response.body.modelState) {
            var models = response.body.modelState;
            if (models) {
                for (var model in models) {
                    presentError(model, models[model]);
                }
            }
        }
    },
    handleErrors = function(error, response) {
        console.log('error: ', error);
        console.log('response: ', response);
        presentErrors(response);
    };

var APIService = {
    //Specific requests
    login: function(username, password, callback) {
        //endpoint doesn't support json, need to do a form post
        request.post(APIEndpoints.LOGIN)
            .set('Accept', 'application/json')
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
    //TODO: make this a common post
    register: function(email, password, confirmPassword, callback) {
        request.post(APIEndpoints.REGISTER)
            .set('Accept', 'application/json')
            .send({Email: email, Password: password, ConfirmPassword: confirmPassword})
            .end(function(error, response) {
                if (error || response.error) {
                    handleErrors(error, response);
                    callback(error, null);
                    return;
                }
                callback(null, response.body);
            });
    },
    getCurrentUser: function(callback) {
        request.get(APIEndpoints.ME)
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + TokenService.getToken())
            .end(function(error, response) {
                if (error || response.error) {
                    handleErrors(error, response);
                    return;
                }
                callback(response.body);
            });
    },
    //Common requests
    get: function(url, callback) {
        request.get(url)
            .set('Accept', 'application/json')
            .set('Authorization', 'Bearer ' + TokenService.getToken())
            .end(function(error, response) {
                if (error || response.error) {
                    handleErrors(error, response);
                    return;
                }
                callback(response.body);
            });
    },
    post: function(url, item, callback) {
        request.post(url)
            .set('Accept', 'application/json')
            .send(item)
            .set('Authorization', 'Bearer ' + TokenService.getToken())
            .end(function(error, response) {
                if (error || response.error) {
                    handleErrors(error, response);
                    return;
                }
                callback(response.body);
            });
    },
    put: function(url, item, callback) {
        request.put(url)
            .set('Accept', 'application/json')
            .send(item)
            .set('Authorization', 'Bearer ' + TokenService.getToken())
            .end(function(error, response) {
                if (error || response.error) {
                    handleErrors(error, response);
                    return;
                }
                callback(response.body);
            });
    },
    delete: function(url, item, callback) {
        request.del(url)
            .set('Accept', 'application/json')
            .send(item)
            .set('Authorization', 'Bearer ' + TokenService.getToken())
            .end(function(error, response) {
                if (error || response.error) {
                    handleErrors(error, response);
                    return;
                }
                callback(response.body);
            });
    },
};

module.exports = APIService;
