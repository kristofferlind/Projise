'use strict';

var config = require('../../config/config'),
    storyConfig = require('./story.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = storyConfig.Interactions,
    StoryActions = storyConfig.Actions,
    Actions = config.Actions;

var _stories = [];

var StoryStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        var stories = [];

        //Convert back to array for easier use in components
        for (var storyId in _stories) {
            stories.push(_stories[storyId]);
        }

        return stories;
    },
    addChangeListener: function(callback) {
        StoryStore.on(Actions.CHANGE, callback);
    },
    removeChangeListener: function(callback) {
        StoryStore.removeListener(Actions.CHANGE, callback);
    }
});

var emitChange = function(data) {
    StoryStore.emit(Actions.CHANGE);
};

var save = function(story) {
    if (!story) {
        return;
    }

    _stories[story._id] = story;
    emitChange();
};

var remove = function(story) {
    if (!story) {
        return;
    }

    delete _stories[story._id];
    emitChange();
};

var setStories = function(stories) {
    if (!stories) {
        return;
    }
    stories.forEach(function(story) {
        _stories[story._id] = story;
    });
    emitChange();
};

AppDispatcher.register(function(payload) {
    switch(payload.eventName) {
        case StoryActions.STORIES_RECEIVED:
            setStories(payload.data);
            emitChange();
            break;
        case StoryActions.STORY_SAVED:
            save(payload.data);
            break;
        case StoryActions.STORY_REMOVED:
            remove(payload.data);
            break;
    }

    return true;
});

module.exports = StoryStore;
