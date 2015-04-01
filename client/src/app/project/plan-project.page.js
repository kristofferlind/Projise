'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication'),
    SprintToolbar = require('../sprint/sprint-toolbar'),
    SprintList = require('../sprint/sprint-list'),
    SprintStore = require('../sprint/sprint.store'),
    SprintInteractions = require('../sprint/sprint.interactions');

var PlanProjectPage = React.createClass({
    mixins: [RequireAuthentication],
    getInitialState: function() {
        return {
            sprints: SprintStore.getAll()
        };
    },
    componentDidMount: function() {
        SprintStore.addChangeListener(this.onSprintChange);
        SprintInteractions.loadAll();
    },
    componentWillUnmount: function() {
        SprintStore.removeChangeListener(this.onSprintChange);
    },
    onSprintChange: function() {
        this.setState({
            sprints: SprintStore.getAll(),
        });
    },
    render: function() {
        var sprints = this.state.sprints;
        return (
            <main>
                <h1>Plan project</h1>
                <div className="row">
                    <div className="col-md-4">
                        <h2>Sprints</h2>
                        <SprintToolbar />
                        <SprintList sprints={sprints} />
                    </div>
                    <div className="col-md-4">
                        <h2>Product backlog</h2>
                        <p>toolbar, list of stories</p>
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
