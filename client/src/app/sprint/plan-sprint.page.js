'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication');

var PlanSprintPage = React.createClass({
    mixins: [RequireAuthentication],
    render: function() {
        return (
            <main>
                <h1>Plan sprint</h1>
            </main>
        );
    }
});

module.exports = PlanSprintPage;
