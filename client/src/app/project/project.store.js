'use strict';

var config = require('../../config/config'),
    projectConfig = require('./project.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = projectConfig.Interactions,
    ProjectActions = projectConfig.Actions,
    Actions = config.Actions;

var _projects = [];

var ProjectStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return _projects;
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

var findIndex = function(project) {
    var projectIds = _projects.map(function(project) {
        return project._id;
    });
    return projectIds.indexOf(project._id);
};

var save = function(project) {
    if (!project) {
        return;
    }

    //Try to find project
    var projectIndex = findIndex(project._id);

    //Was it found?
    if (projectIndex > -1) {
        //..update
        _projects[projectIndex] = project;
    } else {
        //..add
        _projects.push(project);
    }
    emitChange();
};

var remove = function(project) {
    if (!project) {
        return;
    }

    //Try to find project
    var projectIndex = findIndex(project);

    //Was it found?
    if (projectIndex > -1) {
        //..remove
        _projects.splice(projectIndex, 1);
        emitChange();
    }
};

AppDispatcher.register(function(payload) {
    console.log(payload.eventName, payload.data);
    switch(payload.eventName) {
        case ProjectActions.PROJECTS_RECEIVED:
            _projects = payload.data;
            emitChange();
            break;
        // case ProjectActions.PROJECT_CREATED:
        //     add(payload.data);
        //     break;
        // case ProjectActions.PROJECT_UPDATED:
        //     update(payload.data);
        //     break;
        // case ProjectActions.PROJECT_DELETED:
        //     remove(payload.data);
        //     break;
        case ProjectActions.PROJECT_ACTIVATED:
            //set active project here?
            break;
        case ProjectActions.PROJECT_SAVED:
            save(payload.data);
            break;
        case ProjectActions.PROJECT_REMOVED:
            remove(payload.data);
            break;
    }

    return true;
});

module.exports = ProjectStore;
