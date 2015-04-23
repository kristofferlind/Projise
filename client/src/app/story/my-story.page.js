'use strict';

var React = require('react/addons'),
    StoryStore = require('../story/story.store'),
    StoryInteractions = require('../story/story.interactions'),
    StoryToolbar = require('../story/story-toolbar'),
    StoryList = require('../story/story-list'),
    SprintInteractions = require('../sprint/sprint.interactions'),
    Dropzone = require('../../components/dragAndDrop/dropzone'),
    Draggable = require('../../components/dragAndDrop/draggable'),
    StoryItem = require('../story/story-item'),
    SessionStore = require('../account/session.store.js'),
    StoryBox = require('./story-box'),
    RequireActiveSprint = require('../sprint/require-active-sprint'),
    TaskBox = require('../task/task-box');

var MyStoryPage = React.createClass({
    mixins: [RequireActiveSprint],
    getInitialState: function() {
        return {
            stories: StoryStore.getAll(),
            sprintStories: StoryStore.getAllInSprint()
        };
    },
    componentDidMount: function() {
        SprintInteractions.loadAll();
        StoryStore.addChangeListener(this.onStoryChange);
        StoryInteractions.loadAll();
    },
    componentWillUnmount: function() {
        StoryStore.removeChangeListener(this.onStoryChange);
    },
    onStoryChange: function() {
        this.setState({
            stories: StoryStore.getAll(),
            sprintStories: StoryStore.getAllInSprint()
        });
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
    render: function() {
        var stories = this.state.stories,
            sprintStories = this.state.sprintStories,
            activeStory = null,
            user = SessionStore.getCurrentUser(),
            completedStories = this.state.sprintStories.filter(function(story) {
                if (story.userId === user._id) {
                    activeStory = story;
                }

                return story.status === 'completed';
            }),
            myStory = '',
            backlogOptions = {
                completed: false,
                inProgress: false,
                notStarted: true
            };

        if (activeStory) {
            myStory = <StoryItem itemType='my-story' story={activeStory} />;
        } else {
            myStory = (
                <Dropzone acceptType="sb-story" onDrop={this.startStory}>
                    <div className="dropzone dropzone-story">
                    </div>
                </Dropzone>
            );
        }

        return (
            <main>
                <h1>My story</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Sprint backlog</h2>
                        <StoryBox filterOptions={backlogOptions} onDrop={this.cancelStory} acceptType='my-story' itemType='sb-story' stories={sprintStories} isSprintBacklog='true' />
                    </div>
                    <div className="col-md-4">
                        <h2>My story</h2>
                        <p className="form-control-static">Put story in dropzone below to start working.</p>
                        {myStory}
                        <br />
                        <TaskBox story={activeStory} />
                    </div>
                    <div className="col-md-4">
                        <h2>Completed stories</h2>
                        <p className="form-control-static">Drag story here to mark as complete.</p>
                        <StoryList acceptType='my-story' itemType='sb-story' stories={completedStories} onDrop={this.completeStory} isSprintBacklog='true' />
                    </div>
                </div>
            </main>
        );
    }
});

module.exports = MyStoryPage;
