'use strict';

var config = require('../../config/config'),
    APIEndpoints = config.APIEndpoints,
    APIService = require('../api.service'),
    StoryActions = require('./story.actions'),
    SessionStore = require('../account/session.store');

var StoryService = {
    getAll: function() {
        APIService.get(APIEndpoints.STORIES, function(data) {
            StoryActions.storiesReceived(data);
        });
    },
    create: function(story) {
        APIService.post(APIEndpoints.STORIES, story, function(data) {
            StoryActions.created(data);
        });
    },
    update: function(story) {
        var url = APIEndpoints.STORIES + '/' + story._id;
        APIService.put(url, story, function(data) {
            StoryActions.updated(data);
        });
    },
    delete: function(story) {
        var url = APIEndpoints.STORIES + '/' + story._id;
        APIService.delete(url, story, function(data) {
            StoryActions.deleted(story);
        });
    }
};

module.exports = StoryService;
