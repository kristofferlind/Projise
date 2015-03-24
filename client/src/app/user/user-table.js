'use strict';

var React = require('react/addons'),
    UserRow = require('./user-row'),
    Table = require('react-bootstrap').Table;

var UserTable = React.createClass({
    render: function() {
        return (
            <Table hover>
                <tr>
                    <td>Email</td>
                    <td width="50">Actions</td>
                </tr>
                <UserRow />
                <UserRow />
                <UserRow />
                <UserRow />
                <UserRow />
            </Table>
        );
    }
});

module.exports = UserTable;
