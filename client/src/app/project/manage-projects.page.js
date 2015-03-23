'use strict';

var React = require('react/addons'),
    ProjectBox = require('./project-box');

var ManageProjectsPage = React.createClass({
    render: function() {
        return (
            <main>
                <h1>Manage projects</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Projects</h2>
                        <ProjectBox />
                    </div>
                    <div className="col-md-4">
                        <h2>Users</h2>
                        users
                    </div>
                    <div className="col-md-4">
                        <h2>Teams</h2>
                        teams
                    </div>
                </div>
            </main>
        );
    }
});

module.exports = ManageProjectsPage;
