'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    CreateDocumentModal = require('./create-document-modal');

var DocumentToolbar = React.createClass({
    mixins: [OverlayMixin],
    getInitialState: function() {
        return {
            isModalOpen: false
        };
    },
    toggleModal: function() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    },
    handleCreate: function() {
        this.toggleModal();
    },
    render: function() {
        return (
            <div className="row">
                <div className="col-md-9">
                    <Input type="text" placeholder="Search for.." />
                </div>
                <div className="col-md-3">
                    <Button onClick={this.handleCreate} bsStyle="success">
                        <Glyphicon glyph="plus" /> Create
                    </Button>
                </div>
            </div>
        );
    },
    renderOverlay: function() {
        if (!this.state.isModalOpen) {
            return <span/>;
        }

        return (
            <CreateDocumentModal onToggle={this.toggleModal} />
        );
    }
});

module.exports = DocumentToolbar;
