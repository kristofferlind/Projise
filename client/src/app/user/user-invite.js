'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;

var UserInvite = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <Input type="email" placeholder="test@test.com" />
                </div>
                <div className="col-md-3">
                    <Button bsStyle="success">
                        <Glyphicon glyph="plus" /> Invite
                    </Button>
                </div>
            </div>
        );
    }
});

module.exports = UserInvite;
