'use strict';

var React = require('react/addons'),
    Glyphicon = require('react-bootstrap').Glyphicon,
    Button = require('react-bootstrap').Button;

var TaskItem = React.createClass({
    toggleStatus: function() {
        this.props.toggleTaskStatus(this.props.task);
    },
    remove: function() {
        this.props.removeTask(this.props.task);
    },
    render: function() {
        var task = this.props.task;
        return (
            <tr>
                <td>
                    <input onChange={this.toggleStatus} className="task-toggle" type="checkbox" checked={task.isDone} ref='isDone' />
                </td>
                <td className='task-td-description'>
                    {task.description}
                </td>
                <td>
                    <Button onClick={this.remove} bsStyle="danger">
                        <Glyphicon glyph="trash" />
                    </Button>
                </td>
            </tr>
        );
    }
});

module.exports = TaskItem;
