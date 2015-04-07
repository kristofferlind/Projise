'use strict';

var config = require('../../config/config'),
    APIEndpoints = config.APIEndpoints,
    APIService = require('../api.service'),
    StoryActions = require('./story.actions'),
    SessionStore = require('../account/session.store'),
    SprintStore = require('../sprint/sprint.store'),
    StoryStatus = config.StoryStatus;

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
    },
    addToSprint: function(story) {
        var url = APIEndpoints.STORIES + '/' + story._id;
        story.sprintId = SprintStore.getActiveSprintId();
        APIService.put(url, story, function(data) {
            StoryActions.updated(data);
        });
    },
    removeFromSprint: function(story) {
        var url = APIEndpoints.STORIES + '/' + story._id;
        story.sprintId = null;
        delete story.sprintId;
        APIService.put(url, story, function(data) {
            StoryActions.updated(data);
        });
    },
    start: function(story) {
        var url = APIEndpoints.STORIES + '/' + story._id,
            user = SessionStore.getCurrentUser();

        story.status = StoryStatus.IN_PROGRESS;
        story.userId = user._id;


        APIService.put(url, story, function(data) {
            StoryActions.updated(data);
        });
    },
    cancel: function(story) {
        var url = APIEndpoints.STORIES + '/' + story._id;

        story.status = StoryStatus.NOT_STARTED;
        story.userId = null;

        APIService.put(url, story, function(data) {
            StoryActions.updated(data);
        });
    },
    complete: function(story) {
        var url = APIEndpoints.STORIES + '/' + story._id;

        story.status = StoryStatus.COMPLETED;
        story.userId = null;

        APIService.put(url, story, function(data) {
            StoryActions.updated(data);
        });
    }
};

module.exports = StoryService;
