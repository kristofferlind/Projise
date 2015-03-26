'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./project.config'),
    Interactions = config.Interactions,
    ProjectService = require('./project.service');

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var ProjectInteractions = {
    loadAll: function() {
        dispatch(Interactions.LOAD_PROJECTS);
        ProjectService.getAll();
    },
    create: function(project) {
        dispatch(Interactions.CREATE_PROJECT, project);
        ProjectService.create(project);
    },
    update: function(project) {
        dispatch(Interactions.UPDATE_PROJECT, project);
        ProjectService.update(project);
    },
    delete: function(project) {
        dispatch(Interactions.DELETE_PROJECT, project);
        ProjectService.delete(project);
    },
    activate: function(project) {
        dispatch(Interactions.ACTIVATE_PROJECT, project);
        ProjectService.activate(project);
    }
};

module.exports = ProjectInteractions;
