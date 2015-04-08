'use strict';

var React = require('react/addons'),
    DocumentInteractions = require('./document.interactions'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button,
    Input = require('react-bootstrap').Input;

var CreateDocumentModal = React.createClass({
    createDocument: function(e) {
        e.preventDefault();
        var document = {
            name: this.refs.name.getValue(),
            description: this.refs.description.getValue()
        };
        DocumentInteractions.create(document);
        this.props.onToggle();
    },
    render: function() {
        return (
            <Modal bsStyle="primary" title="Create document" onRequestHide={this.props.onToggle}>
                <div className="modal-body">
                    <form onSubmit={this.createDocument}>
                        <Input type="text" placeholder="Name" ref="name" label="Name" />
                        <Input type="textarea" placeholder="Description" ref="description" label="Description" />
                        <Input type="submit" value="Create" />
                    </form>
                </div>
            </Modal>
        );
    }
});

module.exports = CreateDocumentModal;
