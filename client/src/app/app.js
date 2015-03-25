'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

//Masterpages
var AppMaster = require('./app.master');

//Public pages
var LoginPage = require('./account/login.page');
var RegisterPage = require('./account/register.page');

//Private pages
var ManageProjectsPage = require('./project/manage-projects.page');
var ProjectOverviewPage = require('./project/project-overview.page');
var PlanProjectPage = require('./project/plan-project.page');
var PlanSprintPage = require('./sprint/plan-sprint.page');
var MyStoryPage = require('./story/my-story.page');

//Routing
var Routes = (
    <Route handler={AppMaster}>
        <Route name="register" handler={RegisterPage} />
        <Route name="login" handler={LoginPage} />
        <Route name="manage-projects" handler={ManageProjectsPage} />
        <Route name="project-overview" handler={ProjectOverviewPage} />
        <Route name="plan-project" handler={PlanProjectPage} />
        <Route name="plan-sprint" handler={PlanSprintPage} />
        <Route name="my-story" handler={MyStoryPage} />
        <DefaultRoute handler={ProjectOverviewPage} />
    </Route>
);

//Hook
var content = document.getElementById('content');

//Hook it up
Router.run(Routes, function (Handler) {
    React.render(<Handler/>, content);
});
