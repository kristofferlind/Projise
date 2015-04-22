'use strict';

var React = require('react/addons'),
    DocumentTable = require('./document-table'),
    DocumentToolbar = require('./document-toolbar');

var filterDocuments = function(documents, filterText) {
    filterText = filterText && filterText.toLowerCase();

    var filteredDocuments = documents.filter(function(document) {
        return document.name.toLowerCase().indexOf(filterText) !== -1 || document.description.toLowerCase().indexOf(filterText) !== -1;
    });

    return filteredDocuments || [];
};

var DocumentBox = React.createClass({
    getInitialState: function() {
        return {
            filterText: ''
        };
    },
    setFilter: function(filterText) {
        this.setState({
            filterText: filterText
        });
    },
    render: function() {
        var documents = this.props.documents,
            filterText = this.state.filterText,
            filteredDocuments = filterDocuments(documents, filterText);

        return (
            <section>
                <DocumentToolbar onFilter={this.setFilter} filterText={filterText}  />
                <DocumentTable documents={filteredDocuments} />
            </section>
        );
    }
});

module.exports = DocumentBox;
