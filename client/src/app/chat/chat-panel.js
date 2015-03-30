'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication');

require('./chat-panel.scss');

var ChatPanel = React.createClass({
    mixins: [RequireAuthentication],
    render: function() {
        var component = this;
        var getClassName = function() {
            if (component.props.open) {
                return 'pane pane-active';
            } else {
                return 'pane';
            }
        };

        return (
            <section id="chat-panel" className={getClassName()}>
            </section>
        );
    }
});

module.exports = ChatPanel;
