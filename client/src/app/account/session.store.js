'use strict';

var config = require('../../config/config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Actions = config.Actions;

var _user = {};

var SessionStore = assign({}, EventEmitter.prototype, {
    getCurrentUser: function() {
        return _user;
    },
    getActiveProjectId: function() {
        return _user.activeProject;
    },
    getActiveTeamId: function() {
        return _user.activeTeam;
    },
    addChangeListener: function(callback) {
        SessionStore.on(Actions.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        SessionStore.removeListener(Actions.CHANGE, callback);
    }
});

var emitChange = function(data) {
    SessionStore.emit(Actions.CHANGE);
};

var update = function(user) {
    _user = user;
    emitChange();
};

AppDispatcher.register(function(payload) {
    switch(payload.eventName) {
        case Actions.USER_RECEIVED:
            update(payload.data);
            break;
        case Actions.USER_SAVED:
            update(payload.data);
            break;
    }

    return true;
});

module.exports = SessionStore;
