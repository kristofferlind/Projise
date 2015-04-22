'use strict';

var React = require('react/addons'),
    StoryInteractions = require('./story.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var CreateStoryModal = React.createClass({
    createStory: function(e) {
        e.preventDefault();
        var story = {
            name: this.refs.name.getValue(),
            description: this.refs.description.getValue(),
            points: this.refs.points.getValue(),
            priority: this.refs.priority.getValue(),
            status: 'not started'
        };
        StoryInteractions.create(story);
        this.props.onToggle();
    },
    render: function() {
        return (
            <Modal bsStyle="primary" title="Create story" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.createStory}>
                        <Input type="text" placeholder="Name" ref="name" label="Name" autoFocus />
                        <Input type="textarea" placeholder="Description" ref="description" label="Description" />
                        <Input type="range" defaultValue="5" min="1" max="100" ref="points" label="Points" />
                        <Input type="range" defaultValue="5" min="1" max="100" ref="priority" label="Priority" />
                        <Input type="submit" value="Create" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = CreateStoryModal;
