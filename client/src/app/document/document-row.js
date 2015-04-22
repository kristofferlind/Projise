'use strict';

var React = require('react/addons'),
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    DocumentInteractions = require('./document.interactions'),
    EditDocumentModal = require('./edit-document-modal'),
    Confirm = require('../../components/confirm/confirm-dialog'),
    ModalTrigger = require('react-bootstrap').ModalTrigger,
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Tooltip = require('react-bootstrap').Tooltip;

var DocumentRow = React.createClass({
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
    handleActivate: function() {
        DocumentInteractions.activate(this.props.document);
    },
    handleSettings: function() {
        this.toggleModal();
    },
    handleEdit: function() {
        DocumentInteractions.edit(this.props.document);
    },
    handleDelete: function() {
        DocumentInteractions.delete(this.props.document);
    },
    render: function() {
        var component = this;
        var document = this.props.document;
        var isActive = this.props.active;

        var showButtons = function() {
            if (!isActive) {
                return (
                    <ButtonGroup>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Show document</Tooltip>}>
                            <Button onClick={component.handleActivate} bsStyle="success">
                                <Glyphicon glyph="ok" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Edit document</Tooltip>}>
                            <Button onClick={component.handleEdit} bsStyle="warning">
                                <Glyphicon glyph="pencil" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Edit document details</Tooltip>}>
                            <Button onClick={component.handleSettings} bsStyle="info">
                                <Glyphicon glyph="cog" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Delete document</Tooltip>}>
                            <ModalTrigger modal={<Confirm bsStyle='danger' onConfirm={component.handleDelete} message='Are you sure you want to delete this document?' action='Delete document' />}>
                                <Button bsStyle="danger">
                                    <Glyphicon glyph="trash" />
                                </Button>
                            </ModalTrigger>
                        </OverlayTrigger>
                    </ButtonGroup>
                );
            }
        };

        var getClass = function() {
            if (isActive) {
                return 'success';
            }
            return '';
        };

        return (
            <tr className={getClass()}>
                <td>{document.name}</td>
                <td>{document.description}</td>
                <td>
                    {showButtons()}
                </td>
            </tr>
        );
    },
    renderOverlay: function() {
        if (!this.state.isModalOpen) {
            return <span/>;
        }

        return (
            <EditDocumentModal document={this.props.document} onToggle={this.toggleModal} />
        );
    }
});

module.exports = DocumentRow;
