'use strict';

var React = require('react/addons'),
    DocumentRow = require('./document-row'),
    Table = require('react-bootstrap').Table;

var DocumentTable = React.createClass({
    render: function() {
        var component = this;
        var documents = this.props.documents.map(function(document) {
            return (
                <DocumentRow key={document._id} document={document} />
            );
        });
        return (
            <Table hover>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                        <td width="180">Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {documents}
                </tbody>
            </Table>
        );
    }
});

module.exports = DocumentTable;
