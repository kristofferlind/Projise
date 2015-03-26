'use strict';

var React = require('react/addons'),
    AuthenticationService = require('../authentication.service'),
    Router = require('react-router');

var LogoutPage = React.createClass({
    mixins: [Router.State, Router.Navigation],
    componentDidMount: function () {
        AuthenticationService.logout();
        this.transitionTo('login');
    },
    render: function() {
        return (
            <p>You have been logged out.</p>
        );
    }
});

module.exports = LogoutPage;
