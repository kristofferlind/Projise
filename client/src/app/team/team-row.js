'use strict';

var React = require('react/addons'),
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;

var TeamRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>Team 1</td>
                <td>Fullstack dev team</td>
                <td>
                    <Button bsStyle="success">
                        <Glyphicon glyph="plus" />
                    </Button>
                </td>
            </tr>
        );
    }
});

module.exports = TeamRow;
