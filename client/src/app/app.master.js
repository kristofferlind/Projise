'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    ChatPanel = require('./chat/chat-panel'),
    NavPanel = require('./navigation/nav-panel'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    AuthenticationService = require('./authentication.service'),
    NotificationList = require('../components/notifications/notification-list'),
    Link = Router.Link,
    AuthenticationService = require('./authentication.service');

// CSS
require('./app.scss');

var AppMaster = React.createClass({
    getInitialState: function() {
        return {
            showChatPanel: false,
            showNavPanel: false
        };
    },
    toggleChat: function() {
        this.setState({
            showChatPanel: !this.state.showChatPanel
        });
    },
    toggleNav: function() {
        this.setState({
            showNavPanel: !this.state.showNavPanel
        });
    },
    closeNav: function() {
        this.setState({
            showNavPanel: false
        });
    },
    render: function() {
        return (
            <div id="wrapper">
                <header>
                    <div className="navbar navbar-inverse navbar-fixed-top">
                        <a className="pull-left navbar-brand" onClick={this.toggleNav}><Glyphicon glyph="menu-hamburger" inverse /> Nav</a>
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">Projise</a>
                        </div>
                    <a className="pull-right navbar-brand" onClick={this.toggleChat}><i className="fa fa-comments"></i> Chat</a>
                    <Link className="pull-right navbar-brand" to="logout">Log out</Link>
                    </div>
                </header>
                <div id="flex-grid">
                    <NavPanel open={this.state.showNavPanel} />
                    <section onClick={this.closeNav} id="content-wrapper" className="container-fluid">

                        <RouteHandler />

                    </section>
                    <ChatPanel open={this.state.showChatPanel} />
                </div>
                <NotificationList />
            </div>
        );
    }
});

module.exports = AppMaster;
