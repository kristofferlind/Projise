'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    ProjectInteractions = require('../project/project.interactions'),
    Glyphicon = require('react-bootstrap').Glyphicon;

var UserInvite = React.createClass({
    handleInvite: function() {
        var email = this.refs.email.getValue();
        ProjectInteractions.inviteUser(email);
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <Input type="email" placeholder="test@test.com" ref="email" />
                </div>
                <div className="col-md-3">
                    <Button onClick={this.handleInvite} bsStyle="success">
                        <Glyphicon glyph="plus" /> Invite
                    </Button>
                </div>
            </div>
        );
    }
});

module.exports = UserInvite;
