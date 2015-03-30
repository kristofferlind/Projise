'use strict';

var React = require('react/addons'),
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    ProjectInteractions = require('./project.interactions'),
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    EditProjectModal = require('./edit-project-modal');

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
