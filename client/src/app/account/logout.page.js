'use strict';

var React = require('react/addons'),
    AuthenticationService = require('../authentication.service');

var LogoutPage = React.createClass({
    componentDidMount: function () {
        AuthenticationService.logout();
    },
    render: function() {
        return (
            <p>You have been logged out.</p>
        );
    }
});

module.exports = LogoutPage;
