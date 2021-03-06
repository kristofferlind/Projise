'use strict';

// var server = 'http://projise.apphb.com',
var server = 'http://localhost:48272',
// var server = 'http://192.168.56.101',
    api = server + '/api';

var config = {
    DEBUG: true,
    APIEndpoints: {
        LOGIN: server + '/Token',
        REGISTER: server + '/register',
        PROJECTS: api + '/projects',
        SPRINTS: api + '/sprints',
        STORIES: api + '/stories',
        TASKS: api + '/tasks',
        DOCUMENTS: api + '/documents',
        USERS: api + '/users',
        TEAMS: api + '/teams',
        ACTIVATE_PROJECT: api + '/users/me/activate/project',
        ACTIVATE_TEAM: api + '/users/me/activate/team',
        ME: api + '/users/me',
        MESSAGES: api + '/messages'
    },
    Actions: {
        CHANGE: 'CHANGE',
        USER_RECEIVED: 'USER_RECEIVED',
        USER_SAVED: 'user-saved'
    },
    Urls: {
        SERVER: server,
        API: api,
        SIGNALR: server +'/signalr'
    },
    StoryStatus: {
        NOT_STARTED: 'not started',
        IN_PROGRESS: 'in progress',
        COMPLETED: 'completed'
    }
};

module.exports = config;
