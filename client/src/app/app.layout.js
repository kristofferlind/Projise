'use strict';

var React = require('react/addons'),
    Router = require('react-router'),
    RouteHandler = Router.RouteHandler,
    ChatPanel = require('./chat/chat-panel'),
    NavPanel = require('./navigation/nav-panel'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;

// CSS
require('./app.scss');

var AppLayout = React.createClass({
    getInitialState: function() {
        return {
            showChatPanel: false,
            showNavPanel: false
        };
    },
    toggleChat: function() {
        console.log(this.state.showChatPanel);
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
                    <a className="pull-right navbar-brand" onClick={this.toggleChat}><i className="fa fa-users"></i> Chat</a>
                    </div>
                </header>
                <div id="flex-grid">
                    <NavPanel open={this.state.showNavPanel} />
                    <section onClick={this.closeNav} id="content-wrapper" className="container-fluid">

                        <RouteHandler />

                    </section>
                    <ChatPanel open={this.state.showChatPanel} />
                </div>
            </div>
        );
    }
});

module.exports = AppLayout;
