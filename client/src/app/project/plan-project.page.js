'use strict';

var React = require('react/addons'),
    SprintToolbar = require('../sprint/sprint-toolbar'),
    SprintList = require('../sprint/sprint-list'),
    SprintStore = require('../sprint/sprint.store'),
    SprintInteractions = require('../sprint/sprint.interactions'),
    StoryStore = require('../story/story.store'),
    StoryInteractions = require('../story/story.interactions'),
    StoryBox = require('../story/story-box'),
    RequireActiveProject = require('./require-active-project'),
    SprintBox = require('../sprint/sprint-box');


var PlanProjectPage = React.createClass({
    mixins: [RequireActiveProject],
    getInitialState: function() {
        return {
            sprints: SprintStore.getAll(),
            stories: StoryStore.getAll()
        };
    },
    componentDidMount: function() {
        SprintStore.addChangeListener(this.onSprintChange);
        StoryStore.addChangeListener(this.onStoryChange);
        SprintInteractions.loadAll();
        StoryInteractions.loadAll();
    },
    componentWillUnmount: function() {
        SprintStore.removeChangeListener(this.onSprintChange);
        StoryStore.removeChangeListener(this.onStoryChange);
    },
    onSprintChange: function() {
        this.setState({
            sprints: SprintStore.getAll(),
        });
    },
    onStoryChange: function() {
        this.setState({
            stories: StoryStore.getAll(),
        });
    },
    render: function() {
        var sprints = this.state.sprints,
            stories = this.state.stories;
        return (
            <main>
                <h1>Plan project</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Sprints</h2>
                        <SprintBox sprints={sprints} />
                    </div>
                    <div className="col-md-4">
                        <h2>Product backlog</h2>
                        <StoryBox stories={stories} showCreate='true' />
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
