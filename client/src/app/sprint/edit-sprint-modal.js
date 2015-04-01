'use strict';

var React = require('react/addons'),
    SprintInteractions = require('./sprint.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var EditSprintModal = React.createClass({
    updateSprint: function(e) {
        e.preventDefault();
        var sprint = {
            _id: this.props.sprint._id,
            name: this.refs.name.getValue(),
            goal: this.refs.goal.getValue(),
            start: this.refs.start.getValue(),
            end: this.refs.end.getValue()
        };
        SprintInteractions.update(sprint);
        this.props.onToggle();
    },
    render: function() {
        var sprint = this.props.sprint;
        var start = sprint.start.substr(0, 10);
        var end = sprint.end.substr(0, 10);
        return (
            <Modal bsStyle="primary" title="Edit sprint" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.updateSprint}>
                        <Input type="text" placeholder="Name" defaultValue={sprint.name} ref="name" label="Name" />
                        <Input type="textarea" placeholder="Goal" defaultValue={sprint.goal} ref="goal" label="Goal" />
                        <Input type="date" ref="start" label="Start" defaultValue={start} />
                        <Input type="date" ref="end" label="End" defaultValue={end} />
                        <Input type="submit" value="Edit" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = EditSprintModal;
