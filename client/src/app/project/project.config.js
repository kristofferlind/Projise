'use strict';

var config = {
    Actions: {
        PROJECTS_RECEIVED: 'PROJECTS_RECEIVED',
        PROJECT_ACTIVATED: 'PROJECT_ACTIVATED',
        PROJECT_SAVED: 'project-saved',
        PROJECT_REMOVED: 'project-removed'
    },
    Interactions: {
        LOAD_PROJECTS: 'LOAD_PROJECTS',
        CREATE_PROJECT: 'CREATE_PROJECT',
        UPDATE_PROJECT: 'UPDATE_PROJECT',
        DELETE_PROJECT: 'DELETE_PROJECT',
        ACTIVATE_PROJECT: 'ACTIVATE_PROJECT',
        INVITE_USER: 'INVITE_USER',
        REMOVE_USER: 'REMOVE_USER',
        ADD_TEAM: 'ADD_TEAM'
    }
};

module.exports = config;
