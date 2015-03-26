'use strict';

var React = require('react/addons'),
    ProjectRow = require('./project-row'),
    Table = require('react-bootstrap').Table;

var ProjectTable = React.createClass({
    render: function() {
        var projects = this.props.projects.map(function(project) {
            return (
                <ProjectRow key={project._id} project={project} />
            );
        });
        return (
            <Table hover>
                <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td width="140">Actions</td>
                </tr>
                {projects}
            </Table>
        );
    }
});

module.exports = ProjectTable;
