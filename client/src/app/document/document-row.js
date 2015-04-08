'use strict';

var React = require('react/addons'),
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    DocumentInteractions = require('./document.interactions'),
    EditDocumentModal = require('./edit-document-modal');

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
                        <Button onClick={component.handleActivate} bsStyle="success">
                            <Glyphicon glyph="ok" />
                        </Button>
                        <Button onClick={component.handleEdit} bsStyle="warning">
                            <Glyphicon glyph="pencil" />
                        </Button>
                        <Button onClick={component.handleSettings} bsStyle="info">
                            <Glyphicon glyph="cog" />
                        </Button>
                        <Button onClick={component.handleDelete} bsStyle="danger">
                            <Glyphicon glyph="trash" />
                        </Button>
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
