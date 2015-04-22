'use strict';

var React = require('react/addons'),
    StoryInteractions = require('../story/story.interactions'),
    StoryToolbar = require('../story/story-toolbar'),
    StoryList = require('../story/story-list'),
    StoryStatus = require('../../config/config').StoryStatus;

var filterStories = function(stories, filterText, filterOptions) {
    filterText = filterText && filterText.toLowerCase();

    var filteredStories = stories.filter(function(story) {
        var optionsInclude = false;

        optionsInclude = filterOptions.notStarted && story.status === StoryStatus.NOT_STARTED;
        optionsInclude = optionsInclude || filterOptions.inProgress && story.status === StoryStatus.IN_PROGRESS;
        optionsInclude = optionsInclude || filterOptions.completed && story.status === StoryStatus.COMPLETED;

        if (optionsInclude) {
            var textInclude = false;

            textInclude = story.name.toLowerCase().indexOf(filterText) !== -1 || story.description.toLowerCase().indexOf(filterText) !== -1;

            return textInclude;
        }

        return false;
    });

    return filteredStories || [];
};

var StoryBox = React.createClass({
    getInitialState: function() {
        var filterOptions = {
                completed: true,
                inProgress: true,
                notStarted: true
            };

        if (this.props.filterOptions) {
            filterOptions = this.props.filterOptions;
        }

        return {
            filterText: '',
            filterOptions: filterOptions
        };
    },
    startStory: function(story) {
        StoryInteractions.start(story);
    },
    cancelStory: function(story) {
        StoryInteractions.cancel(story);
    },
    completeStory: function(story) {
        StoryInteractions.complete(story);
    },
    setFilter: function(filterText, filterOptions) {
        this.setState({
            filterText: filterText,
            filterOptions: filterOptions
        });
    },
    render: function() {
        var stories = this.props.stories,
            filterText = this.state.filterText,
            filterOptions = this.state.filterOptions,
            filteredStories = filterStories(stories, filterText, filterOptions);

        return (
            <div>
                <StoryToolbar onFilter={this.setFilter} filterText={filterText} filterOptions={filterOptions} showCreate={this.props.showCreate} />
                <StoryList acceptType={this.props.acceptType} itemType={this.props.itemType} stories={filteredStories} isSprintBacklog={this.props.isSprintBacklog} onDrop={this.props.onDrop} />
            </div>
        );
    }
});

module.exports = StoryBox;
