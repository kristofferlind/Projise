'use strict';

var React = require('react/addons'),
    ProjectTable = require('./project-table'),
    ProjectToolbar = require('./project-toolbar');

var ProjectBox = React.createClass({
    render: function() {
        return (
            <section>
                <ProjectToolbar />
                <ProjectTable />
            </section>
        );
    }
});

module.exports = ProjectBox;
