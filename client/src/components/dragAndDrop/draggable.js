'use strict';

var React = require('react/addons');

var Draggable = React.createClass({
    handleDrag: function(event) {
        var type = this.props.itemType,
            item = this.props.itemData;

        var payload = {
            type: type,
            data: item
        };

        payload = JSON.stringify(payload);

        event.dataTransfer.setData('text', payload);
    },
    render: function() {
        return (
            <div draggable='true' onDragStart={this.handleDrag}>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Draggable;
