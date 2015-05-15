'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    CreateSprintModal = require('./create-sprint-modal');

var SprintToolbar = React.createClass({
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
    filter: function() {
        var filterText = this.refs.filter.getValue();

        this.props.onFilter(filterText);
    },
    render: function() {
        return (
            <div className="toolbar">
                <div>
                    <Input onChange={this.filter} value={this.props.filterText} ref='filter' type="text" placeholder="Search for.." />
                </div>
                <div>
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
            <CreateSprintModal onToggle={this.toggleModal} />
        );
    }
});

module.exports = SprintToolbar;
