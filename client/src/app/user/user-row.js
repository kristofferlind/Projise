'use strict';

var React = require('react/addons'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;

var UserRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>test@test.com</td>
                <td>
                    <Button bsStyle="danger">
                        <Glyphicon glyph="remove" />
                    </Button>
                </td>
            </tr>
        );
    }
});

module.exports = UserRow;
