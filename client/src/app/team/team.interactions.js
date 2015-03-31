'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./team.config'),
    Interactions = config.Interactions,
    TeamService = require('./team.service');

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var TeamInteractions = {
    loadAll: function() {
        dispatch(Interactions.LOAD_TEAMS);
        TeamService.getAll();
    },
    create: function(team) {
        dispatch(Interactions.CREATE_TEAM, team);
        TeamService.create(team);
    },
    update: function(team) {
        dispatch(Interactions.UPDATE_TEAM, team);
        TeamService.update(team);
    },
    delete: function(team) {
        dispatch(Interactions.DELETE_TEAM, team);
        TeamService.delete(team);
    },
    activate: function(team) {
        dispatch(Interactions.ACTIVATE_TEAM, team);
        TeamService.activate(team);
    },
    inviteUser: function(user) {
        dispatch(Interactions.INVITE_USER, user);
        TeamService.inviteUser(user);
    },
    removeUser: function(user) {
        dispatch(Interactions.REMOVE_USER, user);
        TeamService.removeUser(user);
    }
};

module.exports = TeamInteractions;
