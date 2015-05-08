'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./project.config'),
    Actions = config.Actions,
    UserActions = require('../../config/config').Actions;

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
        dispatch(Actions.PROJECT_SAVED, project);
    },
    updated: function(project) {
        dispatch(Actions.PROJECT_SAVED, project);
    },
    deleted: function(project) {
        dispatch(Actions.PROJECT_REMOVED, project);
    },
    activated: function(user) {
        dispatch(UserActions.USER_SAVED, user);
    },
    invitedUser: function(project) {
        dispatch(Actions.PROJECT_SAVED, project);
    },
    removedUser: function(project) {
        dispatch(Actions.PROJECT_SAVED, project);
    },
    addedTeam: function(project) {
        dispatch(Actions.PROJECT_SAVED, project);
    }
};

module.exports = ProjectActions;
