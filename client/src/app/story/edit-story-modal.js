'use strict';

var React = require('react/addons'),
    StoryInteractions = require('./story.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var EditStoryModal = React.createClass({
    updateStory: function(e) {
        e.preventDefault();
        var story = this.props.story;

        story.name = this.refs.name.getValue();
        story.description = this.refs.description.getValue();
        story.points = this.refs.points.getValue();
        story.priority = this.refs.priority.getValue();

        StoryInteractions.update(story);
        this.props.onToggle();
    },
    render: function() {
        var story = this.props.story;
        return (
            <Modal bsStyle="primary" title="Edit story" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.updateStory}>
                        <Input type="text" defaultValue={story.name} placeholder="Name" ref="name" label="Name" autoFocus />
                        <Input type="textarea" defaultValue={story.description} placeholder="Description" ref="description" label="Description" />
                        <Input type="range" defaultValue={story.points} min="1" max="100" ref="points" label="Points" />
                        <Input type="range" defaultValue={story.priority} min="1" max="100" ref="priority" label="Priority" />
                        <Input type="submit" value="Edit" className="btn-primary" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = EditStoryModal;
