'use strict';

var React = require('react/addons'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    Confirm = require('../../components/confirm/confirm-dialog'),
    ModalTrigger = require('react-bootstrap').ModalTrigger,
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Tooltip = require('react-bootstrap').Tooltip;

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
                    <OverlayTrigger placement='top' overlay={<Tooltip>Remove user</Tooltip>}>
                        <ModalTrigger modal={<Confirm bsStyle='danger' onConfirm={this.handleRemove} message='Are you sure you want to remove this user?' action='Remove user' />}>
                            <Button bsSize="small" bsStyle="danger">
                                <Glyphicon glyph="remove" />
                            </Button>
                        </ModalTrigger>
                    </OverlayTrigger>
                </td>
            </tr>
        );
    }
});

module.exports = UserRow;
