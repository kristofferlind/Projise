'use strict';

var React = require('react/addons'),
    NavItem = require('react-bootstrap').NavItem,
    Nav = require('react-bootstrap').Nav,
    Navbar = require('react-bootstrap').Navbar,
    Accordion = require('react-bootstrap').Accordion,
    Panel = require('react-bootstrap').Panel,
    RequireAuthentication = require('../require-authentication'),
    ProjectStore = require('../project/project.store'),
    SprintStore = require('../sprint/sprint.store'),
    SprintInteractions = require('../sprint/sprint.interactions');

require('./nav-panel.scss');

var NavPanel = React.createClass({
    mixins: [RequireAuthentication],
    getInitialState: function() {
        return {
            projectId: ProjectStore.getActiveProjectId(),
            sprintId: SprintStore.getActiveSprintId()
        };
    },
    componentDidMount: function() {
        ProjectStore.addChangeListener(this.onChange);
        SprintStore.addChangeListener(this.onChange);
        SprintInteractions.loadAll();
    },
    componentWillUnmount: function() {
        ProjectStore.removeChangeListener(this.onChange);
        SprintStore.removeChangeListener(this.onChange);
    },
    onChange: function() {
        this.setState({
            projectId: ProjectStore.getActiveProjectId(),
            sprintId: SprintStore.getActiveSprintId()
        });
    },
    render: function() {
        var component = this;
        var getClassName = function() {
            if (component.props.open) {
                return 'pane pane-active';
            } else {
                return 'pane';
            }
        };

        var navItems = [];
        navItems.push(<NavItem eventKey={1} href="#/manage-projects"><i className="fa fa-2x fa-archive"></i> Manage projects</NavItem>);
        navItems.push(<NavItem eventKey={2} href="#/manage-teams"><i className="fa fa-2x fa-users"></i> Manage teams</NavItem>);

        if (this.state.projectId) {
            navItems.push(<NavItem eventKey={4} href="#/plan-project"><i className="fa fa-2x fa-puzzle-piece"></i> Plan project</NavItem>);
            navItems.push(<NavItem eventKey={2} href="#/manage-documents"><i className="fa fa-2x fa-file-text"></i> Manage documents</NavItem>);
            // navItems.push(<NavItem eventKey={3} href="#/"><i className="fa fa-2x fa-dashboard"></i> Project overview</NavItem>);
        }

        if (this.state.sprintId) {
            navItems.push(<NavItem eventKey={5} href="#/plan-sprint"><i className="fa fa-2x fa-coffee"></i> Plan sprint</NavItem>);
            navItems.push(<NavItem eventKey={6} href="#/my-story"><i className="fa fa-2x fa-thumb-tack"></i> My story</NavItem>);
        }

        return (
            <section id="nav-panel" className={getClassName()}>
                <Nav className="sidebar-nav">
                    {navItems}
                </Nav>
            </section>
        );
    }
});

module.exports = NavPanel;
