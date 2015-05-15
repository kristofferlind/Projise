'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;

var UserInvite = React.createClass({
    handleInvite: function() {
        var email = this.refs.email.getValue();
        this.props.invite(email);
    },
    render: function() {
        var inviteButton = (
            <Button onClick={this.handleInvite} bsStyle="primary">
                Invite
            </Button>
        );

        return (
            <Input type="email" placeholder="test@test.com" ref="email" buttonAfter={inviteButton} />
        );
    }
});

module.exports = UserInvite;
