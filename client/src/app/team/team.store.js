'use strict';

var config = require('../../config/config'),
    teamConfig = require('./team.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = teamConfig.Interactions,
    TeamActions = teamConfig.Actions,
    Actions = config.Actions;

var _teams = [],
    _activeTeamId = '';

var TeamStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        var teams = [];

        //Convert back to array for easier use in components
        for (var teamId in _teams) {
            teams.push(_teams[teamId]);
        }

        return teams;
    },
    getActiveTeam: function() {
        if (!_activeTeamId) {
            return {};
        }
        return _teams[_activeTeamId];
    },
    addChangeListener: function(callback) {
        TeamStore.on(Actions.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        TeamStore.removeListener(Actions.CHANGE, callback);
    }
});

var emitChange = function(data) {
    TeamStore.emit(Actions.CHANGE);
};

var save = function(team) {
    if (!team) {
        return;
    }

    _teams[team._id] = team;
    emitChange();
};

var remove = function(team) {
    if (!team) {
        return;
    }

    delete _teams[team._id];
    emitChange();
};

var setTeams = function(teams) {
    if (!teams) {
        return;
    }
    teams.forEach(function(team) {
        _teams[team._id] = team;
    });
    emitChange();
};

var setActiveTeam = function(user) {
    if (!user) {
        return;
    }

    _activeTeamId = user.activeTeam;

    emitChange();
};

AppDispatcher.register(function(payload) {
    console.log(payload.eventName, payload.data);
    switch(payload.eventName) {
        case TeamActions.TEAMS_RECEIVED:
            // _teams = payload.data;
            setTeams(payload.data);
            emitChange();
            break;
        case TeamActions.TEAM_ACTIVATED:
            //set active team here?
            break;
        case TeamActions.TEAM_SAVED:
            save(payload.data);
            break;
        case TeamActions.TEAM_REMOVED:
            remove(payload.data);
            break;
        case Actions.USER_RECEIVED:
            setActiveTeam(payload.data);
            break;
        case Actions.USER_SAVED:
            setActiveTeam(payload.data);
            break;
    }

    return true;
});

module.exports = TeamStore;
