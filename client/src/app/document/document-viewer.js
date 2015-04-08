'use strict';

var React = require('react/addons'),
    mdConverter = require('marked');

var DocumentTable = React.createClass({
    render: function() {
        var documentText = '';
        if (this.props.document) {
            if (this.props.document.data) {
                documentText = this.props.document.data;
            } else {
                documentText = 'Document is empty.';
            }
        } else {
            documentText = 'No document selected';
        }

        var documentHtml = mdConverter(documentText);
        return (
            <div dangerouslySetInnerHTML= {{
                __html: documentHtml
            }}>
            </div>
        );
    }
});

module.exports = DocumentTable;
