'use strict';

var AppDispatcher = require('../app-dispatcher'),
    config = require('./story.config'),
    Actions = config.Actions;

var dispatch = function(eventName, data) {
    AppDispatcher.dispatch({
        eventName: eventName,
        data: data
    });
};

var StoryActions = {
    storiesReceived: function(stories) {
        dispatch(Actions.STORIES_RECEIVED, stories);
    },
    created: function(story) {
        dispatch(Actions.STORY_SAVED, story);
    },
    updated: function(story) {
        dispatch(Actions.STORY_SAVED, story);
    },
    deleted: function(story) {
        dispatch(Actions.STORY_REMOVED, story);
    }
};

module.exports = StoryActions;
