'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./story.config'),
    Interactions = config.Interactions,
    StoryService = require('./story.service');

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var StoryInteractions = {
    loadAll: function() {
        dispatch(Interactions.LOAD_STORIES);
        StoryService.getAll();
    },
    create: function(story) {
        dispatch(Interactions.CREATE_STORY, story);
        StoryService.create(story);
    },
    update: function(story) {
        dispatch(Interactions.UPDATE_STORY, story);
        StoryService.update(story);
    },
    delete: function(story) {
        dispatch(Interactions.DELETE_STORY, story);
        StoryService.delete(story);
    },
    addToSprint: function(story) {
        dispatch(Interactions.ADD_TO_SPRINT, story);
        StoryService.addToSprint(story);
    },
    removeFromSprint: function(story) {
        dispatch(Interactions.REMOVE_FROM_SPRINT, story);
        StoryService.removeFromSprint(story);
    },
    start: function(story) {
        dispatch(Interactions.WORK_ON_STORY, story);
        StoryService.start(story);
    },
    cancel: function(story) {
        dispatch(Interactions.CANCEL_STORY, story);
        StoryService.cancel(story);
    },
    complete: function(story) {
        dispatch(Interactions.COMPLETE_STORY, story);
        StoryService.complete(story);
    }
};

module.exports = StoryInteractions;
