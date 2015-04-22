'use strict';

var React = require('react/addons'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    ProjectInteractions = require('../project/project.interactions'),
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Tooltip = require('react-bootstrap').Tooltip;

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
                    <OverlayTrigger placement='top' overlay={<Tooltip>Add team members to project</Tooltip>}>
                        <Button onClick={this.handleAddTeam} bsStyle="success">
                            <Glyphicon glyph="plus" />
                        </Button>
                    </OverlayTrigger>
                </td>
            </tr>
        );
    }
});

module.exports = TeamRow;
