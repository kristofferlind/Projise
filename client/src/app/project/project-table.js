'use strict';

var React = require('react/addons'),
    ProjectRow = require('./project-row'),
    Table = require('react-bootstrap').Table;

var ProjectTable = React.createClass({
    render: function() {
        var component = this;
        var projects = this.props.projects.map(function(project) {
            var isActiveProject = component.props.activeProject === project;
            return (
                <ProjectRow key={project._id} active={isActiveProject} project={project} />
            );
        });
        return (
            <Table hover>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td width="140">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {projects}
                </tbody>
            </Table>
        );
    }
});

module.exports = ProjectTable;
