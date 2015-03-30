'use strict';

var config = require('../../config/config'),
    APIEndpoints = config.APIEndpoints,
    APIService = require('../api.service'),
    ProjectActions = require('./project.actions'),
    SessionStore = require('../account/session.store');

var ProjectService = {
    getAll: function() {
        APIService.get(APIEndpoints.PROJECTS, function(data) {
            ProjectActions.projectsReceived(data);
        });
    },
    create: function(project) {
        APIService.post(APIEndpoints.PROJECTS, project, function(data) {
            ProjectActions.created(data);
        });
    },
    update: function(project) {
        var url = APIEndpoints.PROJECTS + '/' + project._id;
        APIService.put(url, project, function(data) {
            ProjectActions.updated(data);
        });
    },
    delete: function(project) {
        var url = APIEndpoints.PROJECTS + '/' + project._id;
        APIService.delete(url, project, function(data) {
            ProjectActions.deleted(project);
        });
    },
    activate: function(project) {
        var url = APIEndpoints.ACTIVATE_PROJECT + '/' + project._id;
        APIService.put(url, project, function(data) {
            ProjectActions.activated(data);
        });
    },
    inviteUser: function(email) {
        var projectId = SessionStore.getActiveProjectId();
        var url = APIEndpoints.PROJECTS + '/' + projectId + '/users';
        APIService.put(url, {email: email}, function(data) {
            ProjectActions.invitedUser(data);
        });
    },
    removeUser: function(user) {
        var projectId = SessionStore.getActiveProjectId();
        var url = APIEndpoints.PROJECTS + '/' + projectId + '/users/' + user._id;
        APIService.delete(url, {}, function(data) {
            ProjectActions.removedUser(data);
        });
    },
    addTeam: function(team) {
        var projectId = SessionStore.getActiveProjectId();
        var url = APIEndpoints.PROJECTS + '/' + projectId + '/users/' + team._id;
        APIService.put(url, {}, function(data) {
            ProjectActions.addedTeam(data);
        });
    }
};

module.exports = ProjectService;
