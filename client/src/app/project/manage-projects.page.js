'use strict';

var React = require('react/addons'),
    ProjectBox = require('./project-box'),
    UserTable = require('../user/user-table'),
    UserInvite = require('../user/user-invite'),
    TeamTable = require('../team/team-table'),
    ProjectStore = require('./project.store'),
    ProjectInteractions = require('./project.interactions'),
    RequireAuthentication = require('../require-authentication'),
    TeamInteractions = require('../team/team.interactions'),
    TeamStore = require('../team/team.store');

var ManageProjectsPage = React.createClass({
    mixins: [RequireAuthentication],
    getInitialState: function() {
        return {
            projects: ProjectStore.getAll(),
            activeProject: ProjectStore.getActiveProject(),
            teams: TeamStore.getAll()
        };
    },
    componentDidMount: function() {
        ProjectStore.addChangeListener(this.onProjectChange);
        ProjectInteractions.loadAll();
        TeamStore.addChangeListener(this.onTeamChange);
        TeamInteractions.loadAll();
    },
    componentWillUnmount: function() {
        ProjectStore.removeChangeListener(this.onProjectChange);
        TeamStore.removeChangeListener(this.onTeamChange);
    },
    onProjectChange: function() {
        this.setState({
            projects: ProjectStore.getAll(),
            activeProject: ProjectStore.getActiveProject()
        });
    },
    onTeamChange: function() {
        this.setState({
            teams: TeamStore.getAll()
        });
    },
    handleInvite: function(email) {
        ProjectInteractions.inviteUser(email);
    },
    removeUser: function(user) {
        ProjectInteractions.removeUser(user);
    },
    render: function() {
        var users = this.state.activeProject && this.state.activeProject.users || [];
        var teams = this.state.teams;

        return (
            <main>
                <h1>Manage projects</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Projects</h2>
                        <ProjectBox projects={this.state.projects} activeProject={this.state.activeProject} />
                    </div>
                    <div className="col-md-4">
                        <h2>Users</h2>
                        <UserInvite invite={this.handleInvite} />
                        <UserTable onRemove={this.removeUser} users={users} />
                    </div>
                    <div className="col-md-4">
                        <h2>Teams</h2>
                        <p className="form-control-static">Go to manage teams to setup teams for easier management</p>
                        <TeamTable teams={teams} />
                    </div>
                </div>
            </main>
        );
    }
});

module.exports = ManageProjectsPage;
