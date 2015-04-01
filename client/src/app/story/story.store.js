'use strict';

var config = require('../../config/config'),
    storyConfig = require('./story.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    EventEmitter = require('events').EventEmitter,
    assign = require('object-assign'),
    Interactions = storyConfig.Interactions,
    StoryActions = storyConfig.Actions,
    Actions = config.Actions,
    SprintStore = require('../sprint/sprint.store'),
    SprintActions = require('../sprint/sprint.config').Actions;

var _stories = [];

var getAll = function() {
    var stories = [];

    //Convert to array for easier use in components
    for (var storyId in _stories) {
        stories.push(_stories[storyId]);
    }

    return stories;
};

var StoryStore = assign({}, EventEmitter.prototype, {
    getAll: function() {
        return getAll();
    },
    getAllInSprint: function() {
        var sprintId = SprintStore.getActiveSprintId();
        var stories = getAll(),
            sprintStories = [];

        stories.forEach(function(story) {
            if (story.sprintId === sprintId) {
                sprintStories.push(story);
            }
        });

        return sprintStories;
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
        case SprintActions.SPRINTS_RECEIVED:
            AppDispatcher.waitFor([SprintStore.dispatchToken]);
            emitChange();
            break;
        case StoryActions.STORIES_RECEIVED:
            setStories(payload.data);
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
