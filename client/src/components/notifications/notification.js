'use strict';

var React = require('react/addons'),
    Alert = require('react-bootstrap').Alert,
    NotificationConstants = require('./notifications.config'),
    AppDispatcher = require('../../app/app-dispatcher'),
    NotificationActions = NotificationConstants.Actions;

var NotificationMessage = React.createClass({
    getInitialState: function() {
        return {
            visible: true
        };
    },
    handleDismiss: function() {
        AppDispatcher.dispatch({
            eventName: NotificationActions.REMOVE_NOTIFICATION,
            data: this.props.notification
        });
    },
    render: function() {
        return (
            <Alert bsStyle={this.props.notification.type} onDismiss={this.handleDismiss}>
                {this.props.notification.text}
            </Alert>
        );
    }
});

module.exports = NotificationMessage;
