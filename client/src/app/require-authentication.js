'use strict';

var AuthenticationService = require('./authentication.service');

var RequireAuthentication = {
    statics: {
        willTransitionTo: function(transition) {
            var nextPath = transition.path;

            if (!AuthenticationService.isLoggedIn()) {
                transition.redirect('login', {}, {'nextPath':nextPath});
            }
        }
    }
};

module.exports = RequireAuthentication;
