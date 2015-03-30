'use strict';

var React = require('react/addons'),
    NavItem = require('react-bootstrap').NavItem,
    Nav = require('react-bootstrap').Nav,
    Navbar = require('react-bootstrap').Navbar,
    Accordion = require('react-bootstrap').Accordion,
    Panel = require('react-bootstrap').Panel,
    RequireAuthentication = require('../require-authentication');

require('./nav-panel.scss');

var NavPanel = React.createClass({
    mixins: [RequireAuthentication],
    render: function() {
        var component = this;
        var getClassName = function() {
            if (component.props.open) {
                return 'pane pane-active';
            } else {
                return 'pane';
            }
        };
        return (
            <section id="nav-panel" className={getClassName()}>
                <Nav className="sidebar-nav">
                    <NavItem eventKey={1} href="#/manage-projects">Manage projects</NavItem>
                    <NavItem eventKey={1} href="#/">Project overview</NavItem>
                    <NavItem eventKey={2} href="#/plan-project">Plan project</NavItem>
                    <NavItem eventKey={3} href="#/plan-sprint">Plan sprint</NavItem>
                    <NavItem eventKey={3} href="#/my-story">My story</NavItem>
                </Nav>
            </section>
        );
    }
});

module.exports = NavPanel;
