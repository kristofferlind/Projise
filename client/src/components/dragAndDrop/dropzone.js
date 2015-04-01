'use strict';

var React = require('react/addons');

var Dropzone = React.createClass({
    handleDragOver: function(event) {
        event.preventDefault();
    },
    handleDrop: function() {
        event.preventDefault();

        var payload = JSON.parse(event.dataTransfer.getData('text'));

        if (payload.type === this.props.acceptType) {
            this.props.onDrop(payload.data);
        }
    },
    render: function() {
        return (
            <div onDragOver={this.handleDragOver} onDrop={this.handleDrop}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Dropzone;
