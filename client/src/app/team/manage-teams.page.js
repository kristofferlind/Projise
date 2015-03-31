'use strict';

var React = require('react/addons'),
    UserTable = require('../user/user-table'),
    UserInvite = require('../user/user-invite'),
    RequireAuthentication = require('../require-authentication'),
    TeamInteractions = require('./team.interactions'),
    TeamStore = require('./team.store'),
    ManageTeamTable = require('./manage-team-table'),
    TeamToolbar = require('./team-toolbar');


var ManageTeamsPage = React.createClass({
    mixins: [RequireAuthentication],
    getInitialState: function() {
        return {
            teams: TeamStore.getAll(),
            activeTeam: TeamStore.getActiveTeam()
        };
    },
    componentDidMount: function() {
        TeamStore.addChangeListener(this.onTeamChange);
        TeamInteractions.loadAll();
    },
    componentWillUnmount: function() {
        TeamStore.removeChangeListener(this.onTeamChange);
    },
    onTeamChange: function() {
        this.setState({
            teams: TeamStore.getAll(),
            activeTeam: TeamStore.getActiveTeam()
        });
    },
    handleInvite: function(email) {
        TeamInteractions.inviteUser(email);
    },
    removeUser: function(user) {
        TeamInteractions.removeUser(user);
    },
    render: function() {
        var users = this.state.activeTeam && this.state.activeTeam.users || [],
            teams = this.state.teams,
            activeTeam = this.state.activeTeam;

        return (
            <main>
                <h1>Manage teams</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>My teams</h2>
                        <TeamToolbar />
                        <ManageTeamTable teams={teams} activeTeam={activeTeam} />
                    </div>
                    <div className="col-md-4">
                        <h2>Members</h2>
                        <UserInvite invite={this.handleInvite} />
                        <UserTable onRemove={this.removeUser} users={users} />
                    </div>
                    <div className="col-md-4">
                        <h2>Help?</h2>
                        <p>Organize your teams if you have certain teams that often work together.</p>
                    </div>
                </div>
            </main>
        );
    }
});

module.exports = ManageTeamsPage;
