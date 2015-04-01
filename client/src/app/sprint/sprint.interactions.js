'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./sprint.config'),
    Interactions = config.Interactions,
    SprintService = require('./sprint.service');

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var SprintInteractions = {
    loadAll: function() {
        dispatch(Interactions.LOAD_SPRINTS);
        SprintService.getAll();
    },
    create: function(sprint) {
        dispatch(Interactions.CREATE_SPRINT, sprint);
        SprintService.create(sprint);
    },
    update: function(sprint) {
        dispatch(Interactions.UPDATE_SPRINT, sprint);
        SprintService.update(sprint);
    },
    delete: function(sprint) {
        dispatch(Interactions.DELETE_SPRINT, sprint);
        SprintService.delete(sprint);
    }
};

module.exports = SprintInteractions;
