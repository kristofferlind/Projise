'use strict';

var React = require('react/addons'),
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    TeamInteractions = require('./team.interactions'),
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    EditTeamModal = require('./edit-team-modal'),
    Confirm = require('../../components/confirm/confirm-dialog'),
    ModalTrigger = require('react-bootstrap').ModalTrigger,
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Tooltip = require('react-bootstrap').Tooltip;

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
                        <OverlayTrigger placement='top' overlay={<Tooltip>Activate team</Tooltip>}>
                            <Button onClick={component.handleActivate} bsStyle="success">
                                <Glyphicon glyph="ok" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Edit team</Tooltip>}>
                            <Button onClick={component.handleEdit} bsStyle="warning">
                                <Glyphicon glyph="pencil" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Delete team</Tooltip>}>
                            <ModalTrigger modal={<Confirm bsStyle='danger' onConfirm={component.handleDelete} message='Are you sure you want to delete this team?' action='Delete team' />}>
                                <Button bsStyle="danger">
                                    <Glyphicon glyph="trash" />
                                </Button>
                            </ModalTrigger>
                        </OverlayTrigger>
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
