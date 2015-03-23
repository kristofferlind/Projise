'use strict';

var Layout = require('./app.layout');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;


//Pages
var ManageProjectsPage = require('./project/manage-projects.page');
var ProjectOverviewPage = require('./project/project-overview.page');
var PlanProjectPage = require('./project/plan-project.page');
var PlanSprintPage = require('./sprint/plan-sprint.page');
var MyStoryPage = require('./story/my-story.page');


var content = document.getElementById('content');

var Routes = (
    <Route handler={Layout}>
        <Route name="/manage-projects" handler={ManageProjectsPage}/>
        <Route name="/project-overview" handler={ProjectOverviewPage}/>
        <Route name="/plan-project" handler={PlanProjectPage}/>
        <Route name="/plan-sprint" handler={PlanSprintPage}/>
        <Route name="/my-story" handler={MyStoryPage}/>
        <DefaultRoute name="home" handler={ProjectOverviewPage} />
    </Route>
);

Router.run(Routes, function (Handler) {
    React.render(<Handler/>, content);
});
