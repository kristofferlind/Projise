'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    CreateStoryModal = require('./create-story-modal');

var StoryToolbar = React.createClass({
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
            <CreateStoryModal onToggle={this.toggleModal} />
        );
    }
});

module.exports = StoryToolbar;
