'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;

var ProjectToolbar = React.createClass({
    render: function() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <Input type="text" placeholder="Search for.." />
                </div>
                <div className="col-md-3">
                    <Button bsStyle="success">
                        <Glyphicon glyph="plus" /> Create
                    </Button>
                </div>
            </div>
        );
    }
});

module.exports = ProjectToolbar;