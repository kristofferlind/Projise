'use strict';

var React = require('react/addons'),
    SprintToolbar = require('../sprint/sprint-toolbar'),
    SprintList = require('../sprint/sprint-list');

var filterSprints = function(sprints, filterText) {
    filterText = filterText && filterText.toLowerCase();

    var filteredSprints = sprints.filter(function(sprint) {
        return sprint.name.toLowerCase().indexOf(filterText) !== -1 || sprint.goal.toLowerCase().indexOf(filterText) !== -1;
    });

    return filteredSprints || [];
};

var SprintBox = React.createClass({
    getInitialState: function() {
        return {
            filterText: ''
        };
    },
    setFilter: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },
    render: function() {
        var sprints = this.props.sprints,
            filterText = this.state.filterText,
            filteredSprints = filterSprints(sprints, filterText);

        return (
            <div>
                <SprintToolbar onFilter={this.setFilter} filterText={filterText} />
                <SprintList sprints={filteredSprints} />
            </div>
        );
    }
});

module.exports = SprintBox;
