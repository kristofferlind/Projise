'use strict';

var React = require('react/addons'),
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    TeamInteractions = require('./team.interactions'),
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    EditTeamModal = require('./edit-team-modal');

var TeamRow = React.createClass({
    mixins: [OverlayMixin],
    getInitialState: function() {
        return {
            isModalOpen: false
        };
    },
    toggleModal: function() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    },
    handleActivate: function() {
        TeamInteractions.activate(this.props.team);
    },
    handleEdit: function() {
        this.toggleModal();
    },
    handleDelete: function() {
        TeamInteractions.delete(this.props.team);
    },
    render: function() {
        var component = this;
        var team = this.props.team;
        var isActive = this.props.active;

        var showButtons = function() {
            if (!isActive) {
                return (
                    <ButtonGroup>
                        <Button onClick={component.handleActivate} bsStyle="success">
                            <Glyphicon glyph="ok" />
                        </Button>
                        <Button onClick={component.handleEdit} bsStyle="warning">
                            <Glyphicon glyph="pencil" />
                        </Button>
                        <Button onClick={component.handleDelete} bsStyle="danger">
                            <Glyphicon glyph="trash" />
                        </Button>
                    </ButtonGroup>
                );
            }
        };

        var getClass = function() {
            if (isActive) {
                return 'success';
            }
            return '';
        };

        return (
            <tr className={getClass()}>
                <td>{team.name}</td>
                <td>{team.description}</td>
                <td>
                    {showButtons()}
                </td>
            </tr>
        );
    },
    renderOverlay: function() {
        if (!this.state.isModalOpen) {
            return <span/>;
        }

        return (
            <EditTeamModal team={this.props.team} onToggle={this.toggleModal} />
        );
    }
});

module.exports = TeamRow;
