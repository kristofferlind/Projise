'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    AuthenticationService = require('../authentication.service'),
    Link = require('react-router').Link,
    Notify = require('../../components/notifications/notification.service');

require('./account.scss');

var RegisterPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    getInitialState: function() {
        return {
            error: false,
            message: ''
        };
    },
    handleRegister: function(event) {
        event.preventDefault();

        var email = this.refs.email.getValue(),
            password = this.refs.password.getValue(),
            confirmPassword = this.refs.confirm.getValue(),
            router = this.context.router;

        AuthenticationService.register(email, password, confirmPassword, function(wasRegistered) {
            if (wasRegistered) {
                Notify.success('Registration successful, redirecting to login.');
                router.replaceWith('/login');
            }
        });
    },
    render: function() {
        var errors = this.state.error ? <p>Bad login information</p> : '';
        return (
            <div className="backdrop">
                <section className="box login-box">
                    <form onSubmit={this.handleRegister}>
                        <Input type="email" placeholder="user@example.com" label="Email" ref="email" autoFocus />
                        <Input type="password" placeholder="password" label="Password" ref="password" />
                        <Input type="password" placeholder="password" label="Confirm password" ref="confirm" />
                        <p>Already a member? <Link to="login">Login</Link></p>
                        <Button type="submit" onClick={this.handleRegister}>Register</Button>
                        {this.state.message}
                        {errors}
                    </form>
                </section>
            </div>
        );
    }
});

module.exports = RegisterPage;
