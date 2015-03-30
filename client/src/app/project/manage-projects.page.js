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
            projects: ProjectStore.getAll()
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
            projects: ProjectStore.getAll()
        });
    },
    render: function() {
        return (
            <main>
                <h1>Manage projects</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Projects</h2>
                        <ProjectBox projects={this.state.projects} />
                    </div>
                    <div className="col-md-4">
                        <h2>Users</h2>
                        <UserInvite />
                        <UserTable />
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
