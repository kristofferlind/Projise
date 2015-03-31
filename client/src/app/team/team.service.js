'use strict';

var config = require('../../config/config'),
    APIEndpoints = config.APIEndpoints,
    APIService = require('../api.service'),
    TeamActions = require('./team.actions');

var TeamService = {
    getAll: function() {
        APIService.get(APIEndpoints.TEAMS, function(data) {
            TeamActions.teamsReceived(data);
        });
    },
    create: function(team) {
        APIService.post(APIEndpoints.TEAMS, team, function(data) {
            TeamActions.created(data);
        });
    },
    update: function(team) {
        var url = APIEndpoints.TEAMS + '/' + team._id;
        APIService.put(url, team, function(data) {
            TeamActions.updated(data);
        });
    },
    delete: function(team) {
        var url = APIEndpoints.TEAMS + '/' + team._id;
        APIService.delete(url, team, function(data) {
            TeamActions.deleted(team);
        });
    },
    activate: function(team) {
        var url = APIEndpoints.ACTIVATE_TEAM + '/' + team._id;
        APIService.put(url, team, function(data) {
            TeamActions.activated(data);
        });
    },
    inviteUser: function(email) {
        var url = APIEndpoints.TEAMS + '/users';
        APIService.put(url, {email: email}, function(data) {
            TeamActions.invitedUser(data);
        });
    },
    removeUser: function(user) {
        var url = APIEndpoints.TEAMS + '/users/' + user._id;
        APIService.delete(url, {}, function(data) {
            TeamActions.removedUser(data);
        });
    }
};

module.exports = TeamService;
