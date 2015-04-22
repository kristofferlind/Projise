'use strict';

var SprintStore = require('./sprint.store'),
    Notify = require('../../components/notifications/notification.service'),
    AuthenticationService = require('../authentication.service'),
    ProjectStore = require('../project/project.store');

var RequireActiveSprint = {
    statics: {
        willTransitionTo: function(transition) {
            var nextPath = transition.path;

            if (!AuthenticationService.isLoggedIn()) {
                transition.redirect('login', {}, {'nextPath':nextPath});
                return;
            }

            if (!ProjectStore.getActiveProjectId()) {
                Notify.warning('You need to select a project before viewing this page.');
                transition.redirect('manage-projects');
                return;
            }

            if (!SprintStore.getActiveSprintId()) {
                Notify.warning('There has to be a sprint active to view this page.');
                transition.redirect('plan-project');
                return;
            }
        }
    }
};

module.exports = RequireActiveSprint;
