'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication');

var ProjectOverviewPage = React.createClass({
    mixins: [RequireAuthentication],
    render: function() {
        return (
            <main>
                <h1>Project overview</h1>
            </main>
        );
    }
});

module.exports = ProjectOverviewPage;
