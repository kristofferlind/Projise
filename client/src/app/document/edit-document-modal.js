'use strict';

var React = require('react/addons'),
    DocumentInteractions = require('./document.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var EditDocumentModal = React.createClass({
    updateDocument: function(e) {
        e.preventDefault();
        var document = this.props.document;
        document.name = this.refs.name.getValue();
        document.description = this.refs.description.getValue();

        DocumentInteractions.update(document);
        this.props.onToggle();
    },
    render: function() {
        var document = this.props.document;
        return (
            <Modal bsStyle="primary" title="Edit document" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.updateDocument}>
                        <Input type="text" placeholder="Name" defaultValue={document.name} ref="name" label="Name" />
                        <Input type="textarea" placeholder="Description" defaultValue={document.description} ref="description" label="Description" />
                        <Input type="submit" value="Edit" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = EditDocumentModal;
