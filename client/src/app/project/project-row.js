'use strict';

var React = require('react/addons'),
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon;

var ProjectRow = React.createClass({
    render: function() {
        return (
            <tr>
                <td>project1</td>
                <td>project description</td>
                <td>
                    <ButtonGroup>
                        <Button bsStyle="success">
                            <Glyphicon glyph="ok" />
                        </Button>
                        <Button bsStyle="warning">
                            <Glyphicon glyph="pencil" />
                        </Button>
                        <Button bsStyle="danger">
                            <Glyphicon glyph="trash" />
                        </Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
});

module.exports = ProjectRow;
