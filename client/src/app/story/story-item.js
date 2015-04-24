'use strict';

var React = require('react/addons'),
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    Button = require('react-bootstrap').Button,
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Glyphicon = require('react-bootstrap').Glyphicon,
    EditStoryModal = require('./edit-story-modal'),
    StoryInteractions = require('./story.interactions'),
    Draggable = require('../../components/dragAndDrop/draggable'),
    SprintStore = require('../sprint/sprint.store'),
    Confirm = require('../../components/confirm/confirm-dialog'),
    ModalTrigger = require('react-bootstrap').ModalTrigger,
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Dropzone = require('../../components/dragAndDrop/dropzone'),
    Tooltip = require('react-bootstrap').Tooltip;

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
    handleReprioritize: function(droppedStory) {
        var story = this.props.story;

        //Set new priority based on whether it was previously higher or lower
        if (droppedStory.priority >= story.priority) {
            droppedStory.priority = parseInt(story.priority, 10) - 1;
        } else {
            droppedStory.priority = parseInt(story.priority, 10) + 1;
        }

        //Make sure extremes aren't exceeded
        if (droppedStory.priority > 100) {
            droppedStory.priority = 100;
        }

        if (droppedStory.priority < 1) {
            droppedStory.priority = 1;
        }

        //Update
        StoryInteractions.update(droppedStory);
    },
    render: function() {
        var component = this;
        var story = this.props.story;
        var statusClass = 'story-item ';

        //Check if story is part of backlog and selected in active sprint
        if (this.props.itemType === 'pb-story' && story.sprintId === SprintStore.getActiveSprintId()) {
            statusClass += 'story-in-sprint ';
        }

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
                    <OverlayTrigger placement='top' overlay={<Tooltip>Edit story</Tooltip>}>
                            <Button onClick={this.handleEdit} bsSize="small" bsStyle="primary">
                                <Glyphicon glyph="cog" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Delete story</Tooltip>}>
                            <ModalTrigger modal={<Confirm bsStyle='danger' onConfirm={this.handleDelete} message='Are you sure you want to delete this story?' action='Delete' />}>
                                <Button bsSize="small" bsStyle="danger">
                                    <Glyphicon glyph="trash" />
                                </Button>
                            </ModalTrigger>
                        </OverlayTrigger>
                    </ButtonGroup>
                </div>
            );
        }

        return (
            <Dropzone acceptType={this.props.itemType} onDrop={this.handleReprioritize}>
                <Draggable itemType={this.props.itemType} itemData={story}>
                    <div className={statusClass}>
                            <div className='story-item-points'>
                                {story.points}
                            </div>
                            <div className='story-item-body'>
                                {actions}

                                <h4>{story.name}</h4>
                                <p>{story.description}</p>
                            </div>

                    </div>
                </Draggable>
            </Dropzone>
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
