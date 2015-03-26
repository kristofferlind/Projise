'use strict';

//TODO: manage users for active project in userstore and move projectmanagement here

var React = require('react/addons'),
    ProjectTable = require('./project-table'),
    ProjectToolbar = require('./project-toolbar');

var ProjectBox = React.createClass({
    render: function() {
        return (
            <section>
                <ProjectToolbar />
                <ProjectTable projects={this.props.projects} />
            </section>
        );
    }
});

module.exports = ProjectBox;
