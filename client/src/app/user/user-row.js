'use strict';

var React = require('react/addons'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;
    // ProjectInteractions = require('../project/project.interactions');

var UserRow = React.createClass({
    handleRemove: function() {
        this.props.onRemove(this.props.user);
        // ProjectInteractions.removeUser(this.props.user);
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
