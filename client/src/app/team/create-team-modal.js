'use strict';

var React = require('react/addons'),
    TeamInteractions = require('./team.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var CreateTeamModal = React.createClass({
    createTeam: function(e) {
        e.preventDefault();
        var team = {
            name: this.refs.name.getValue(),
            description: this.refs.description.getValue(),
            users: []
        };
        TeamInteractions.create(team);
        this.props.onToggle();
    },
    render: function() {
        return (
            <Modal bsStyle="primary" title="Create team" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.createTeam}>
                        <Input type="text" placeholder="Name" ref="name" label="Name" autoFocus />
                        <Input type="textarea" placeholder="Description" ref="description" label="Description" />
                        <Input type="submit" value="Create" className="btn-primary" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = CreateTeamModal;
