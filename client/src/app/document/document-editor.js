'use strict';

//TODO: this is very inefficient, implement with operational transformation instead if time allows.

var React = require('react/addons'),
    DocumentInteractions = require('./document.interactions'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button;

var DocumentEditor = React.createClass({
    handleQuit: function() {
        DocumentInteractions.quitEditor();
    },
    handleEdit: function() {
        var document = this.props.document;
        document.data = this.refs.document.getDOMNode().value;
        DocumentInteractions.update(this.props.document);
    },
    render: function() {
        return (
            <div className='document-editor'>
                <p>Document will save automatically. <Button className='pull-right' bsStyle='warning' onClick={this.handleQuit}>Leave editor</Button></p>
                <textarea onChange={this.handleEdit} defaultValue={this.props.document.data} ref='document' />
            </div>
        );
    }
});

module.exports = DocumentEditor;
