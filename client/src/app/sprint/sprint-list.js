'use strict';

var React = require('react/addons'),
    SprintItem = require('./sprint-item');

var SprintList = React.createClass({
    render: function() {
        var sprints = this.props.sprints.map(function(sprint) {
            return (
                <SprintItem key={sprint._id} sprint={sprint} />
            );
        });

        return (
            <div>
                {sprints}
            </div>
        );
    }
});

module.exports = SprintList;
