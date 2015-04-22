'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication'),
    RequireActiveProject = require('./require-active-project');

var ProjectOverviewPage = React.createClass({
    mixins: [RequireActiveProject],
    render: function() {
        return (
            <main>
                <h1>Project overview</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Ideas?</h2>
                        <p>ideas? calendar? high priority tasks?</p>
                    </div>
                    <div className="col-md-8">
                        <h2>Burndown chart?</h2>
                        <p>d3 burndown chart? last version had 3 columns with calendar, ideas and project details</p>
                    </div>
                </div>
            </main>
        );
    }
});

module.exports = ProjectOverviewPage;
