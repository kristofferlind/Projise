'use strict';

var React = require('react/addons'),
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    Button = require('react-bootstrap').Button,
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Glyphicon = require('react-bootstrap').Glyphicon,
    EditStoryModal = require('./edit-story-modal'),
    StoryInteractions = require('./story.interactions'),
    Draggable = require('../../components/dragAndDrop/draggable');

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
        var component = this;
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

        var actions = '';
        if (this.props.showActions) {
            actions = (
                <div className="pull-right">
                    <ButtonGroup>
                        <Button onClick={component.handleEdit} bsSize="small" bsStyle="primary">
                            <Glyphicon glyph="cog" />
                        </Button>
                        <Button onClick={component.handleDelete} bsSize="small" bsStyle="danger">
                            <Glyphicon glyph="trash" />
                        </Button>
                    </ButtonGroup>
                </div>
            );
        }

        return (
            <Draggable itemType={this.props.itemType} itemData={story}>
                <div className={statusClass}>
                        <div className='story-item-points'>
                            {story.points}
                        </div>
                        <div className='story-item-body'>
                            {actions}

                            <h4>{story.name}</h4>
                            <b>Description:</b> <span>{story.description}</span>
                        </div>

                </div>
            </Draggable>
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
