'use strict';

var React = require('react/addons'),
    StoryItem = require('./story-item'),
    Dropzone = require('../../components/dragAndDrop/dropzone'),
    StoryInteractions = require('./story.interactions');

var StoryList = React.createClass({
    handleDrop: function(story) {
        if (this.props.onDrop) {
            this.props.onDrop(story);
            return;
        }

        if (this.props.isSprintBacklog) {
            this.addStoryToSprint(story);
            return;
        }

        this.removeStoryFromSprint(story);
    },
    addStoryToSprint: function(story) {
        StoryInteractions.addToSprint(story);
    },
    removeStoryFromSprint: function(story) {
        StoryInteractions.removeFromSprint(story);
    },
    render: function() {
        var stories, acceptType, itemType,
            component = this;

        if (component.props.acceptType && component.props.itemType) {
            acceptType = component.props.acceptType;
            itemType = component.props.itemType;
        } else {
            if (component.props.isSprintBacklog) {
                acceptType='pb-story';
                itemType='sb-story';
            } else {
                acceptType='sb-story';
                itemType='pb-story';
            }
        }

        if (component.props.stories.length > 0) {
            stories = component.props.stories.map(function(story) {
                return (
                    <StoryItem showActions={!component.props.isSprintBacklog} key={story._id} story={story} itemType={itemType} />
                );
            });
        } else {
            stories = <p>Could not find any stories</p>;
        }

        return (
            <Dropzone acceptType={acceptType} onDrop={this.handleDrop}>
                <div className='story-list scroll-column'>
                    {stories}
                </div>
            </Dropzone>
        );
    }
});

module.exports = StoryList;
