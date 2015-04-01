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
    }
};

module.exports = StoryInteractions;
