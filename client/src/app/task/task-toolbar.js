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
        return (
            <div className="row">
                <form onSubmit={this.addTask} >
                    <div className="col-md-9">
                        <Input type="text" placeholder="Build unit tests" ref="task" />
                    </div>
                    <div className="col-md-3">
                        <Button onClick={this.addTask} bsStyle="success">
                            <Glyphicon glyph="plus" /> Add task
                        </Button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = TaskToolbar;
