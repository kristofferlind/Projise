'use strict';

var React = require('react/addons'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;

var UserRow = React.createClass({
    handleRemove: function() {
        this.props.onRemove(this.props.user);
    },
    render: function() {
        var user = this.props.user;
        return (
            <tr>
                <td>{user.email}</td>
                <td>
                    <Button bsStyle="danger">
                        <Glyphicon onClick={this.handleRemove} glyph="remove" />
                    </Button>
                </td>
            </tr>
        );
    }
});

module.exports = UserRow;
