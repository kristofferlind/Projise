'use strict';

var React = require('react/addons'),
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    ProjectInteractions = require('./project.interactions'),
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    EditProjectModal = require('./edit-project-modal'),
    Confirm = require('../../components/confirm/confirm-dialog'),
    ModalTrigger = require('react-bootstrap').ModalTrigger,
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Tooltip = require('react-bootstrap').Tooltip;

var ProjectRow = React.createClass({
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
        ProjectInteractions.activate(this.props.project);
    },
    handleEdit: function() {
        this.toggleModal();
    },
    handleDelete: function() {
        ProjectInteractions.delete(this.props.project);
    },
    render: function() {
        var component = this;
        var project = this.props.project;
        var isActive = this.props.active;

        var showButtons = function() {
            if (!isActive) {
                return (
                    <ButtonGroup>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Activate project</Tooltip>}>
                            <Button onClick={component.handleActivate} bsStyle="success">
                                <Glyphicon glyph="ok" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Edit project</Tooltip>}>
                            <Button onClick={component.handleEdit} bsStyle="warning">
                                <Glyphicon glyph="pencil" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Delete project</Tooltip>}>
                            <ModalTrigger modal={<Confirm bsStyle='danger' onConfirm={component.handleDelete} message='Are you sure you want to delete this project?' action='Delete project' />}>
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
                <td>{project.name}</td>
                <td>{project.description}</td>
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
            <EditProjectModal project={this.props.project} onToggle={this.toggleModal} />
        );
    }
});

module.exports = ProjectRow;
