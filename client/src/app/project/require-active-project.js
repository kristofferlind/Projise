'use strict';

var ProjectStore = require('./project.store'),
    Notify = require('../../components/notifications/notification.service'),
    AuthenticationService = require('../authentication.service');

var RequireActiveProject = {
    statics: {
        willTransitionTo: function(transition) {
            var nextPath = transition.path;

            if (!AuthenticationService.isLoggedIn()) {
                transition.redirect('login', {}, {'nextPath':nextPath});
            }

            if (!ProjectStore.getActiveProjectId()) {
                Notify.warning('You need to select a project before viewing this page.');
                transition.redirect('manage-projects');
            }
        }
    }
};

module.exports = RequireActiveProject;
