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
        var project = this.props.project;
        return (
            <tr>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>
                    <ButtonGroup>
                        <Button onClick={this.handleActivate} bsStyle="success">
                            <Glyphicon glyph="ok" />
                        </Button>
                        <Button onClick={this.handleEdit} bsStyle="warning">
                            <Glyphicon glyph="pencil" />
                        </Button>
                        <Button onClick={this.handleDelete} bsStyle="danger">
                            <Glyphicon glyph="trash" />
                        </Button>
                    </ButtonGroup>
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
