'use strict';

var React = require('react/addons'),
    ManageTeamRow = require('./manage-team-row'),
    Table = require('react-bootstrap').Table;

var ManageTeamTable = React.createClass({
    render: function() {
        var component = this;
        var teams = this.props.teams.map(function(team) {
            var isActiveTeam = component.props.activeTeam === team;
            return (
                <ManageTeamRow key={team._id} active={isActiveTeam} team={team} />
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
                    {teams}
                </tbody>
            </Table>
        );
    }
});

module.exports = ManageTeamTable;
