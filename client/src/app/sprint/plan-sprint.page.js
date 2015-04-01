'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication'),
    StoryStore = require('../story/story.store'),
    StoryInteractions = require('../story/story.interactions'),
    StoryToolbar = require('../story/story-toolbar'),
    StoryList = require('../story/story-list'),
    SprintInteractions = require('./sprint.interactions');


var PlanProjectPage = React.createClass({
    mixins: [RequireAuthentication],
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
            sprintStories = this.state.sprintStories;

        return (
            <main>
                <h1>Plan sprint</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Product backlog</h2>
                        <StoryToolbar />
                        <StoryList stories={stories} />
                    </div>
                    <div className="col-md-4">
                        <h2>Sprint backlog</h2>
                        <StoryToolbar />
                        <StoryList stories={sprintStories} isSprintBacklog='true' />
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
