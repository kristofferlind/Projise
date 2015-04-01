'use strict';

var React = require('react/addons'),
    SprintInteractions = require('./sprint.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var CreateSprintModal = React.createClass({
    createSprint: function(e) {
        e.preventDefault();
        var sprint = {
            name: this.refs.name.getValue(),
            goal: this.refs.goal.getValue(),
            start: this.refs.start.getValue(),
            end: this.refs.end.getValue()
        };
        SprintInteractions.create(sprint);
        this.props.onToggle();
    },
    render: function() {
        return (
            <Modal bsStyle="primary" title="Create sprint" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.createSprint}>
                        <Input type="text" placeholder="Name" ref="name" label="Name" />
                        <Input type="textarea" placeholder="Goal" ref="goal" label="Goal" />
                        <Input type="date" ref="start" label="Start" />
                        <Input type="date" ref="end" label="End" />
                        <Input type="submit" value="Create" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = CreateSprintModal;
