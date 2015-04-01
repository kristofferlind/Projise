'use strict';

var config = {
    Actions: {
        STORIES_RECEIVED: 'STORIES_RECEIVED',
        STORY_ACTIVATED: 'STORY_ACTIVATED',
        STORY_SAVED: 'story-saved',
        STORY_REMOVED: 'story-removed'
    },
    Interactions: {
        LOAD_STORYS: 'LOAD_STORYS',
        CREATE_STORY: 'CREATE_STORY',
        UPDATE_STORY: 'UPDATE_STORY',
        DELETE_STORY: 'DELETE_STORY',
        ADD_TO_SPRINT: 'ADD_TO_SPRINT',
        REMOVE_FROM_SPRINT: 'REMOVE_FROM_SPRINT'
    }
};

module.exports = config;
