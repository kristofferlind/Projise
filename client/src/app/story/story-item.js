'use strict';

var React = require('react/addons'),
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    Button = require('react-bootstrap').Button,
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Glyphicon = require('react-bootstrap').Glyphicon,
    EditStoryModal = require('./edit-story-modal'),
    StoryInteractions = require('./story.interactions');

require('./story.scss');

var StoryItem = React.createClass({
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
    handleEdit: function() {
        this.toggleModal();
    },
    handleDelete: function() {
        StoryInteractions.delete(this.props.story);
    },
    render: function() {
        var story = this.props.story;
        var statusClass = 'story-item ';
        switch (story.status) {
            case 'completed':
                statusClass += 'bg-success';
                break;
            case 'in progress':
                statusClass += 'bg-info';
                break;
            case 'not started':
                statusClass += 'bg-danger';
                break;
        }

        return (
            <div className={statusClass}>
                <div className="pull-right">
                    <ButtonGroup>
                        <Button onClick={this.handleEdit} bsSize="small" bsStyle="primary">
                            <Glyphicon glyph="cog" />
                        </Button>
                        <Button onClick={this.handleDelete} bsSize="small" bsStyle="danger">
                            <Glyphicon glyph="trash" />
                        </Button>
                    </ButtonGroup>
                </div>
                <h4>{story.name}</h4>
                <b>Description:</b> <span>{story.description}</span>
            </div>
        );
    },
    renderOverlay: function() {
        if (!this.state.isModalOpen) {
            return <span/>;
        }

        return (
            <EditStoryModal story={this.props.story} onToggle={this.toggleModal} />
        );
    }
});

module.exports = StoryItem;
