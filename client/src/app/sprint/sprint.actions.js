'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./sprint.config'),
    Actions = config.Actions;

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var SprintActions = {
    sprintsReceived: function(sprints) {
        dispatch(Actions.SPRINTS_RECEIVED, sprints);
    },
    created: function(sprint) {
        dispatch(Actions.SPRINT_SAVED, sprint);
    },
    updated: function(sprint) {
        dispatch(Actions.SPRINT_SAVED, sprint);
    },
    deleted: function(sprint) {
        dispatch(Actions.SPRINT_REMOVED, sprint);
    }
};

module.exports = SprintActions;
