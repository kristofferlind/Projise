'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    AuthenticationService = require('../authentication.service'),
    Link = require('react-router').Link;

require('./account.scss');

var LoginPage = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    getInitialState: function() {
        return {
            error: false
        };
    },
    handleLogin: function(event) {
        event.preventDefault();

        var email = this.refs.email.getValue(),
            password = this.refs.password.getValue(),
            component = this,
            router = this.context.router,
            nextPath = router.getCurrentQuery().nextPath;

        AuthenticationService.login(email, password, function(isLoggedIn) {
            if (!isLoggedIn) {
                return component.setState({
                    error: true
                });
            }

            if (nextPath) {
                router.replaceWith(nextPath);
            } else {
                router.replaceWith('/manage-projects');
            }
        });
    },
    render: function() {
        var errors = this.state.error ? <p>Bad login information</p> : '';
        return (
            <div className="backdrop">
                <section className="box login-box">
                    <form onSubmit={this.handleLogin}>
                    <Input type="email" placeholder="user@example.com" label="Email" ref="email" autoFocus />
                    <Input type="password" placeholder="password" label="Password" ref="password" />
                    <p>Not a member? <Link to="register">Register</Link></p>
                    <Button type="submit" onClick={this.handleLogin}>Login</Button>
                    {errors}
                    </form>
                </section>
            </div>
        );
    }
});

module.exports = LoginPage;
