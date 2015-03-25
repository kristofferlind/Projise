'use strict';

var React = require('react/addons'),
    NotificationStore = require('./notification.store'),
    NotificationMessage = require('./notification');

require('./notifications.scss');

var NotificationList = React.createClass({
    getInitialState: function() {
        return {
            notifications: NotificationStore.getAll()
        };
    },
    componentDidMount: function() {
        NotificationStore.addChangeListener(this.onChange);
    },
    componentWillUnmount: function() {
        NotificationStore.removeChangeListener(this.onChange);
    },
    onChange: function() {
        this.setState({
            notifications: NotificationStore.getAll()
        });
    },
    render: function() {
        var notifications = this.state.notifications.map(function(notification) {
            return (
                <NotificationMessage notification={notification} />
            );
        });

        return (
            <div id="notification-list">
                {notifications}
            </div>
        );
    }
});

module.exports = NotificationList;
