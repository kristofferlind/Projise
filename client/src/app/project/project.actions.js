'use strict';

var AppDispatcher = require('../app-dispatcher'),
    APIService = require('../api.service'),
    config = require('./project.config'),
    Actions = config.Actions;

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var ProjectActions = {
    projectsReceived: function(projects) {
        dispatch(Actions.PROJECTS_RECEIVED, projects);
    },
    created: function(project) {
        dispatch(Actions.PROJECT_CREATED, project);
    },
    updated: function(project) {
        dispatch(Actions.PROJECT_UPDATED, project);
    },
    deleted: function(project) {
        dispatch(Actions.PROJECT_DELETED, project);
    },
    activated: function(project) {
        dispatch(Actions.PROJECT_ACTIVATED, project);
    }
};

module.exports = ProjectActions;
