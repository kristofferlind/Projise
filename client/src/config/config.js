'use strict';

var server = 'http://localhost:48272',
    api = server + '/api';

var config = {
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
        ACTIVATE_PROJECT: api + '/users/me/activate/project'
    },
    Actions: {
        CHANGE: 'CHANGE'
    }
};

module.exports = config;
