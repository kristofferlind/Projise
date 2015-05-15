'use strict';

var React = require('react/addons'),
    ProjectInteractions = require('./project.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var CreateProjectModal = React.createClass({
    createProject: function(e) {
        e.preventDefault();
        var project = {
            name: this.refs.name.getValue(),
            description: this.refs.description.getValue(),
            users: []
        };
        ProjectInteractions.create(project);
        this.props.onToggle();
    },
    render: function() {
        return (
            <Modal bsStyle="primary" title="Create project" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.createProject}>
                        <Input type="text" placeholder="Name" ref="name" label="Name" autoFocus />
                        <Input type="textarea" placeholder="Description" ref="description" label="Description" />
                        <Input type="submit" value="Create" className="btn-primary" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = CreateProjectModal;
