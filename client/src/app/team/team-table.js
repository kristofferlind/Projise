'use strict';

var React = require('react/addons'),
    TeamRow = require('./team-row'),
    Table = require('react-bootstrap').Table;

var TeamTable = React.createClass({
    render: function() {
        var teams = this.props.teams.map(function(team) {
            return (
                <TeamRow key={team._id} team={team} />
            );
        });
        return (
            <Table hover>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td width="50">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {teams}
                </tbody>
            </Table>
        );
    }
});

module.exports = TeamTable;
