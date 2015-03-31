'use strict';

var React = require('react/addons'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    ProjectInteractions = require('../project/project.interactions');

var TeamRow = React.createClass({
    handleAddTeam: function() {
        ProjectInteractions.addTeam(this.props.team);
    },
    render: function() {
        var team = this.props.team;
        return (
            <tr>
                <td>{team.name}</td>
                <td>{team.description}</td>
                <td>
                    <Button onClick={this.handleAddTeam} bsStyle="success">
                        <Glyphicon glyph="plus" />
                    </Button>
                </td>
            </tr>
        );
    }
});

module.exports = TeamRow;
