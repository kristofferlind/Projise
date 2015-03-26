'use strict';

var React = require('react/addons'),
    ProjectInteractions = require('./project.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var EditProjectModal = React.createClass({
    updateProject: function(e) {
        e.preventDefault();
        var project = {
            _id: this.props.project._id,
            name: this.refs.name.getValue(),
            description: this.refs.description.getValue()
        };
        ProjectInteractions.update(project);
        this.props.onToggle();
    },
    render: function() {
        var project = this.props.project;
        return (
            <Modal bsStyle="primary" title="Edit project" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.updateProject}>
                        <Input type="text" placeholder="Name" value={project.name} ref="name" label="Name" />
                        <Input type="textarea" placeholder="Description" value={project.description} ref="description" label="Description" />
                        <Input type="submit" value="Edit" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = EditProjectModal;
