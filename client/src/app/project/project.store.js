'use strict';

var config = require('../../config/config'),
    projectConfig = require('./project.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = projectConfig.Interactions,
    ProjectActions = projectConfig.Actions,
    Actions = config.Actions,
    SignalRService = require('../signalr.service');

var _projects = [],
    _activeProjectId = '';

var ProjectStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        var projects = [];

        //Convert back to array for easier use in components
        for (var projectId in _projects) {
            projects.push(_projects[projectId]);
        }

        return projects;
    },
    getActiveProject: function() {
        if (!_activeProjectId) {
            return {};
        }
        return _projects[_activeProjectId];
    },
    getActiveProjectId: function() {
        if (_activeProjectId) {
            return _activeProjectId;
        }
        return null;
    },
    addChangeListener: function(callback) {
        ProjectStore.on(Actions.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        ProjectStore.removeListener(Actions.CHANGE, callback);
    }
});

var emitChange = function(data) {
    ProjectStore.emit(Actions.CHANGE);
};

var save = function(project) {
    if (!project) {
        return;
    }

    _projects[project._id] = project;
    emitChange();
};

var remove = function(project) {
    if (!project) {
        return;
    }

    delete _projects[project._id];
    emitChange();
};

var setProjects = function(projects) {
    if (!projects) {
        return;
    }
    projects.forEach(function(project) {
        _projects[project._id] = project;
    });
    emitChange();
};

var setActiveProject = function(user) {
    if (!user) {
        return;
    }

    _activeProjectId = user.activeProject;

    //Need to switch channel when changing active project
    SignalRService.disconnect();
    SignalRService.connect();
    emitChange();
};

AppDispatcher.register(function(payload) {
    switch(payload.eventName) {
        case ProjectActions.PROJECTS_RECEIVED:
            setProjects(payload.data);
            emitChange();
            break;
        case ProjectActions.PROJECT_SAVED:
            save(payload.data);
            break;
        case ProjectActions.PROJECT_REMOVED:
            remove(payload.data);
            break;
        case Actions.USER_RECEIVED:
            setActiveProject(payload.data);
            break;
        case Actions.USER_SAVED:
            setActiveProject(payload.data);
            break;
    }

    return true;
});

module.exports = ProjectStore;
