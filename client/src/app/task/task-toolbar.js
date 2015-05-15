'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    StoryInteractions = require('../story/story.interactions');

var TaskToolbar = React.createClass({
    addTask: function(e) {
        var story = this.props.story,
            task = {
                description: this.refs.task.getValue(),
                isDone: false
            };

        e.preventDefault();

        story.tasks = story.tasks || [];

        story.tasks.push(task);
        StoryInteractions.update(story);
        this.refs.task.getInputDOMNode().select();
    },
    render: function() {
        var addTaskButton = (
            <Button onClick={this.addTask} bsStyle="primary">
                <Glyphicon glyph="plus" /> Add task
            </Button>
        );
        return (
            <form onSubmit={this.addTask} >
                <Input type="text" placeholder="Build unit tests" ref="task" buttonAfter={addTaskButton} />
            </form>
        );
    }
});

module.exports = TaskToolbar;
