'use strict';

var React = require('react/addons'),
    ProjectTable = require('./project-table'),
    ProjectToolbar = require('./project-toolbar');

var filterProjects = function(projects, filterText) {
    filterText = filterText && filterText.toLowerCase();

    var filteredProjects = projects.filter(function(project) {
        return project.name.toLowerCase().indexOf(filterText) !== -1 || project.description.toLowerCase().indexOf(filterText) !== -1;
    });

    return filteredProjects || [];
};

var ProjectBox = React.createClass({
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
        var projects = this.props.projects,
            filterText = this.state.filterText,
            filteredProjects = filterProjects(projects, filterText);

        return (
            <section>
                <ProjectToolbar onFilter={this.setFilter} filterText={filterText}  />
                <ProjectTable activeProject={this.props.activeProject} projects={filteredProjects} />
            </section>
        );
    }
});

module.exports = ProjectBox;
