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
                    <NavItem eventKey={1} href="#/manage-projects"><i className="fa fa-2x fa-archive"></i> Manage projects</NavItem>
                    <NavItem eventKey={2} href="#/manage-teams"><i className="fa fa-2x fa-users"></i> Manage teams</NavItem>
                    {/*<NavItem eventKey={3} href="#/"><i className="fa fa-2x fa-dashboard"></i> Project overview</NavItem>*/}
                    <NavItem eventKey={4} href="#/plan-project"><i className="fa fa-2x fa-puzzle-piece"></i> Plan project</NavItem>
                    <NavItem eventKey={2} href="#/manage-documents"><i className="fa fa-2x fa-file-text"></i> Manage documents</NavItem>
                    <NavItem eventKey={5} href="#/plan-sprint"><i className="fa fa-2x fa-coffee"></i> Plan sprint</NavItem>
                    <NavItem eventKey={6} href="#/my-story"><i className="fa fa-2x fa-thumb-tack"></i> My story</NavItem>
                </Nav>
            </section>
        );
    }
});

module.exports = NavPanel;
