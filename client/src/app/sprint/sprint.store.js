'use strict';

var config = require('../../config/config'),
    sprintConfig = require('./sprint.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = sprintConfig.Interactions,
    SprintActions = sprintConfig.Actions,
    Actions = config.Actions;

var _sprints = [],
    _activeSprint = null;

var getAll = function() {
    var sprints = [];

    //Convert back to array for easier use in components
    for (var sprintId in _sprints) {
        sprints.push(_sprints[sprintId]);
    }

    return sprints;
};

var findActiveSprint = function() {
    var found = false,
        now = new Date().getTime(),
        sprints = getAll();

    sprints.forEach(function(sprint) {
        var start = new Date(sprint.start),
            end = new Date(sprint.end);

            //Set starting time to 00:00:00
            start.setHours(0);
            start.setMinutes(0);
            start.setSeconds(0);

            //Set ending time to 23:59:59
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);

            //Convert dates to ms since 1970
            start = start.getTime();
            end = end.getTime();

            if (now > start && now < end) {
                _activeSprint = sprint;
                found = true;
                return sprint;
            }
    });

    //Sprint wasn't found
    return found;
};


var SprintStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return getAll();
    },
    getActiveSprintId: function() {
        if (_activeSprint || findActiveSprint()) {
            return _activeSprint._id;
        }
        return null;
    },
    getActiveSprint: function() {
        if (_activeSprint || findActiveSprint()) {
            return _activeSprint;
        }
        return null;
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

SprintStore.dispatchToken = AppDispatcher.register(function(payload) {
    switch(payload.eventName) {
        case SprintActions.SPRINTS_RECEIVED:
            setSprints(payload.data);
            findActiveSprint();
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
