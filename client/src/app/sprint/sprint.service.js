'use strict';

var config = require('../../config/config'),
    APIEndpoints = config.APIEndpoints,
    APIService = require('../api.service'),
    SprintActions = require('./sprint.actions'),
    SessionStore = require('../account/session.store');

var SprintService = {
    getAll: function() {
        APIService.get(APIEndpoints.SPRINTS, function(data) {
            SprintActions.sprintsReceived(data);
        });
    },
    create: function(sprint) {
        APIService.post(APIEndpoints.SPRINTS, sprint, function(data) {
            SprintActions.created(data);
        });
    },
    update: function(sprint) {
        var url = APIEndpoints.SPRINTS + '/' + sprint._id;
        APIService.put(url, sprint, function(data) {
            SprintActions.updated(data);
        });
    },
    delete: function(sprint) {
        var url = APIEndpoints.SPRINTS + '/' + sprint._id;
        APIService.delete(url, sprint, function(data) {
            SprintActions.deleted(sprint);
        });
    }
};

module.exports = SprintService;
