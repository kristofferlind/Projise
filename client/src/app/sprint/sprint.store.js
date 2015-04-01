'use strict';

var config = require('../../config/config'),
    sprintConfig = require('./sprint.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = sprintConfig.Interactions,
    SprintActions = sprintConfig.Actions,
    Actions = config.Actions;

var _sprints = [];

var SprintStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        var sprints = [];

        //Convert back to array for easier use in components
        for (var sprintId in _sprints) {
            sprints.push(_sprints[sprintId]);
        }

        return sprints;
    },
    addChangeListener: function(callback) {
        SprintStore.on(Actions.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        SprintStore.removeListener(Actions.CHANGE, callback);
    }
});

var emitChange = function(data) {
    SprintStore.emit(Actions.CHANGE);
};

var save = function(sprint) {
    if (!sprint) {
        return;
    }

    _sprints[sprint._id] = sprint;
    emitChange();
};

var remove = function(sprint) {
    if (!sprint) {
        return;
    }

    delete _sprints[sprint._id];
    emitChange();
};

var setSprints = function(sprints) {
    if (!sprints) {
        return;
    }
    sprints.forEach(function(sprint) {
        _sprints[sprint._id] = sprint;
    });
    emitChange();
};

AppDispatcher.register(function(payload) {
    switch(payload.eventName) {
        case SprintActions.SPRINTS_RECEIVED:
            setSprints(payload.data);
            emitChange();
            break;
        case SprintActions.SPRINT_SAVED:
            save(payload.data);
            break;
        case SprintActions.SPRINT_REMOVED:
            remove(payload.data);
            break;
    }

    return true;
});

module.exports = SprintStore;
