'use strict';

var React = require('react/addons'),
    UserRow = require('./user-row'),
    Table = require('react-bootstrap').Table;

var UserTable = React.createClass({
    render: function() {
        var component = this;
        var users = this.props.users.map(function(user) {
            return (
                <UserRow onRemove={component.props.onRemove} key={user._id} user={user} />
            );
        });

        return (
            <Table hover>
                <thead>
                    <tr>
                        <td>Email</td>
                        <td width="50">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {users}
                </tbody>
            </Table>
        );
    }
});

module.exports = UserTable;
