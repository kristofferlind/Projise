'use strict';

var config = {
    Actions: {
        TEAMS_RECEIVED: 'TEAMS_RECEIVED',
        TEAM_ACTIVATED: 'TEAM_ACTIVATED',
        TEAM_SAVED: 'team-saved',
        TEAM_REMOVED: 'team-removed'
    },
    Interactions: {
        LOAD_TEAMS: 'LOAD_TEAMS',
        CREATE_TEAM: 'CREATE_TEAM',
        UPDATE_TEAM: 'UPDATE_TEAM',
        DELETE_TEAM: 'DELETE_TEAM',
        ACTIVATE_TEAM: 'ACTIVATE_TEAM',
        INVITE_USER: 'INVITE_USER',
        REMOVE_USER: 'REMOVE_USER'
    }
};

module.exports = config;
