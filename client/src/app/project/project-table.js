'use strict';

var React = require('react/addons'),
    ProjectRow = require('./project-row'),
    Table = require('react-bootstrap').Table;

var ProjectTable = React.createClass({
    render: function() {
        return (
            <Table hover>
                <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td width="140">actions</td>
                </tr>
                <ProjectRow />
                <ProjectRow />
                <ProjectRow />
                <ProjectRow />
                <ProjectRow />
                <ProjectRow />
            </Table>
        );
    }
});

module.exports = ProjectTable;
