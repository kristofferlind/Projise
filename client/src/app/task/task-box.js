'use strict';

var React = require('react/addons'),
    TaskToolbar = require('../task/task-toolbar'),
    TaskList = require('../task/task-list');

var TaskBox = React.createClass({
    render: function() {
        return (
            <div>
                <TaskToolbar story={this.props.story} />
                <TaskList story={this.props.story} />
            </div>
        );
    }
});

module.exports = TaskBox;
