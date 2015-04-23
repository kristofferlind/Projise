'use strict';

var React = require('react/addons'),
    TaskItem = require('../task/task-item'),
    StoryInteractions = require('../story/story.interactions');

require('./task.scss');

var TaskList = React.createClass({
    toggleTaskStatus: function(editedTask) {
        var story = this.props.story,
            tasks = story.tasks,
            taskIndex = tasks.indexOf(editedTask),
            task = tasks[taskIndex];
        task.isDone = !task.isDone;

        StoryInteractions.update(story);
    },
    removeTask: function(task) {
        var story = this.props.story,
            tasks = story.tasks,
            taskIndex = tasks.indexOf(task);

        tasks.splice(taskIndex, 1);

        StoryInteractions.update(story);
    },
    render: function() {
        var tasks = '',
            component = this;

        if (this.props.story && this.props.story.tasks) {
            tasks = this.props.story.tasks.map(function(task) {
                return (
                    <TaskItem toggleTaskStatus={component.toggleTaskStatus} removeTask={component.removeTask} task={task} />
                );
            });
            return (
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Status</th>
                                <th width='500'>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tasks}
                        </tbody>
                    </table>
                </div>
            );
        } else {
            return (
                <p>No tasks found</p>
            );
        }
    }
});

module.exports = TaskList;
