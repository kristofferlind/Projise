'use strict';

var React = require('react/addons'),
    StoryStore = require('../story/story.store'),
    StoryInteractions = require('../story/story.interactions'),
    StoryBox = require('../story/story-box'),
    SprintInteractions = require('./sprint.interactions'),
    RequireActiveSprint = require('../sprint/require-active-sprint');


var PlanProjectPage = React.createClass({
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
    render: function() {
        var stories = this.state.stories,
            sprintStories = this.state.sprintStories,
            productBacklogOptions = {
                completed: false,
                inProgress: false,
                notStarted: true
            },
            sprintBacklogOptions = {
                completed: false,
                inProgress: true,
                notStarted: true
            };

        return (
            <main>
                <h1>Plan sprint</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Product backlog</h2>
                        <StoryBox filterOptions={productBacklogOptions} acceptType='sb-story' itemType='pb-story'  stories={stories} showCreate='true' />
                    </div>
                    <div className="col-md-4">
                        <h2>Sprint backlog</h2>
                        <StoryBox filterOptions={sprintBacklogOptions} acceptType='pb-story' itemType='sb-story' stories={sprintStories} isSprintBacklog='true' />
                    </div>
                    <div className="col-md-4">
                        <h2>Help?</h2>
                        <p>help? chart? sprint stories? (for planning)</p>
                    </div>
                </div>
            </main>
        );
    }
});

module.exports = PlanProjectPage;
