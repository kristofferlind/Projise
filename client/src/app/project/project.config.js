'use strict';

var config = {
    Actions: {
        PROJECTS_RECEIVED: 'PROJECTS_RECEIVED',
        PROJECT_CREATED: 'PROJECT_CREATED',
        PROJECT_UPDATED: 'PROJECT_UPDATED',
        PROJECT_DELETED: 'PROJECT_DELETED',
        PROJECT_ACTIVATED: 'PROJECT_ACTIVATED',
        PROJECT_SAVED: 'signalr-project-save',
        PROJECT_REMOVED: 'signalr-project-remove'
    },
    Interactions: {
        LOAD_PROJECTS: 'LOAD_PROJECTS',
        CREATE_PROJECT: 'CREATE_PROJECT',
        UPDATE_PROJECT: 'UPDATE_PROJECT',
        DELETE_PROJECT: 'DELETE_PROJECT',
        ACTIVATE_PROJECT: 'ACTIVATE_PROJECT'
    }
};

module.exports = config;
