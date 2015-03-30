'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication');

var PlanProjectPage = React.createClass({
    mixins: [RequireAuthentication],
    render: function() {
        return (
            <main>
                <h1>Plan project</h1>
            </main>
        );
    }
});

module.exports = PlanProjectPage;
