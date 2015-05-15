'use strict';

var React = require('react/addons'),
    TeamInteractions = require('./team.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var EditTeamModal = React.createClass({
    updateTeam: function(e) {
        e.preventDefault();

        var team = this.props.team;

        team.name = this.refs.name.getValue();
        team.description = this.refs.description.getValue();

        TeamInteractions.update(team);
        this.props.onToggle();
    },
    render: function() {
        var team = this.props.team;
        return (
            <Modal bsStyle="primary" title="Edit team" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.updateTeam}>
                        <Input type="text" placeholder="Name" defaultValue={team.name} ref="name" label="Name" autoFocus />
                        <Input type="textarea" placeholder="Description" defaultValue={team.description} ref="description" label="Description" />
                        <Input type="submit" value="Edit" className="btn-primary" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = EditTeamModal;
