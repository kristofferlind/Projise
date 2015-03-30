'use strict';

var React = require('react/addons'),
    ProjectBox = require('./project-box'),
    UserTable = require('../user/user-table'),
    UserInvite = require('../user/user-invite'),
    TeamTable = require('../team/team-table'),
    ProjectStore = require('./project.store'),
    ProjectInteractions = require('./project.interactions'),
    RequireAuthentication = require('../require-authentication');

var ManageProjectsPage = React.createClass({
    mixins: [RequireAuthentication],
    getInitialState: function() {
        return {
            projects: ProjectStore.getAll(),
            activeProject: ProjectStore.getActiveProject()
        };
    },
    componentDidMount: function() {
        ProjectStore.addChangeListener(this.onChange);
        ProjectInteractions.loadAll();
    },
    componentWillUnmount: function() {
        ProjectStore.removeChangeListener(this.onChange);
    },
    onChange: function() {
        this.setState({
            projects: ProjectStore.getAll(),
            activeProject: ProjectStore.getActiveProject()
        });
    },
    render: function() {
        var users = this.state.activeProject && this.state.activeProject.users || [];

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
                        <UserInvite />
                        <UserTable users={users} />
                    </div>
                    <div className="col-md-4">
                        <h2>Teams</h2>
                        <p className="form-control-static">Go to manage teams to setup teams for easier management</p>
                        <TeamTable />
                    </div>
                </div>
            </main>
        );
    }
});

module.exports = ManageProjectsPage;
