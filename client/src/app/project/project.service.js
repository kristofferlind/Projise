'use strict';

var config = require('../../config/config'),
    APIEndpoints = config.APIEndpoints,
    APIService = require('../api.service'),
    ProjectActions = require('./project.actions');

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
            ProjectActions.updated(project);
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
            ProjectActions.activated(project);
        });
    }
};

module.exports = ProjectService;
