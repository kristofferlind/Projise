'use strict';

var React = require('react/addons'),
    TeamRow = require('./team-row'),
    Table = require('react-bootstrap').Table;

var TeamTable = React.createClass({
    render: function() {
        return (
            <Table hover>
                <tr>
                    <td>Name</td>
                    <td>Description</td>
                    <td width="50">Actions</td>
                </tr>
                <TeamRow />
                <TeamRow />
                <TeamRow />
                <TeamRow />
                <TeamRow />
            </Table>
        );
    }
});

module.exports = TeamTable;
