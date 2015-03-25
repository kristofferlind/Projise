'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    AuthenticationService = require('../authentication.service'),
    Link = require('react-router').Link;

require('./account.scss');

var RegisterPage = React.createClass({
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
            confirmPassword = this.refs.confirm.getValue();

        AuthenticationService.register(email, password, confirmPassword, function(wasRegistered) {
            if (wasRegistered) {
                //notify
                //redirect to login
                this.setState({
                    message: 'Registration successful, proceed to login.'
                });
            } else {
                this.setState({
                    message: 'Registration failed, try again.'
                });
            }
        });
    },
    render: function() {
        var errors = this.state.error ? <p>Bad login information</p> : '';
        return (
            <div className="backdrop">
                <section className="box login-box">
                    <Input type="email" placeholder="user@example.com" label="Email" ref="email" />
                    <Input type="password" placeholder="password" label="Password" ref="password" />
                    <Input type="password" placeholder="password" label="Confirm password" ref="confirm" />
                    <p>Already a member? <Link to="login">Login</Link></p>
                    <Button onClick={this.handleRegister}>Register</Button>
                    {this.state.message}
                    {errors}
                </section>
            </div>
        );
    }
});

module.exports = RegisterPage;
