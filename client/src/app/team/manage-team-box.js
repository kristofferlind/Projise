'use strict';

var React = require('react/addons'),
    ManageTeamTable = require('./manage-team-table'),
    TeamToolbar = require('./team-toolbar');

var filterTeams = function(teams, filterText) {
    filterText = filterText && filterText.toLowerCase();

    var filteredTeams = teams.filter(function(team) {
        return team.name.toLowerCase().indexOf(filterText) !== -1 || team.description.toLowerCase().indexOf(filterText) !== -1;
    });

    return filteredTeams || [];
};

var TeamBox = React.createClass({
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
        var teams = this.props.teams,
            filterText = this.state.filterText,
            filteredTeams = filterTeams(teams, filterText);

        return (
            <section>
                <TeamToolbar onFilter={this.setFilter} filterText={filterText}  />
                <ManageTeamTable activeTeam={this.props.activeTeam} teams={filteredTeams} />
            </section>
        );
    }
});

module.exports = TeamBox;
