'use strict';

var React = require('react/addons'),
    Input = require('react-bootstrap').Input,
    Button = require('react-bootstrap').Button,
    Glyphicon = require('react-bootstrap').Glyphicon,
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    CreateStoryModal = require('./create-story-modal'),
    Form = require('react-bootstrap').Form,
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Tooltip = require('react-bootstrap').Tooltip;

var StoryToolbar = React.createClass({
    mixins: [OverlayMixin],
    getInitialState: function() {
        return {
            isModalOpen: false,
        };
    },
    toggleModal: function() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    },
    handleCreate: function() {
        this.toggleModal();
    },
    showCompleted: function(event) {
        var options = this.props.filterOptions;
        options.completed = !options.completed;
        this.filter(options);
    },
    showInProgress: function(event) {
        var options = this.props.filterOptions;
        options.inProgress = !options.inProgress;
        this.filter(options);
    },
    showNotStarted: function(event) {
        var options = this.props.filterOptions;
        options.notStarted = !options.notStarted;
        this.filter(options);
    },
    showAll: function(event) {
        var options = {
            completed: true,
            inProgress: true,
            notStarted: true
        };
        this.filter(options);
    },
    filterText: function(event) {
        var options = this.props.filterOptions;
        this.filter(options);
    },
    filter: function(options) {
        var filterText = this.refs.filter.getValue();

        this.props.onFilter(filterText, options);
    },
    render: function() {
        var component = this;
        var isActive = function(status) {
            return component.props.filterOptions[status] === true;
        };
        var showCreate = function() {
            if (component.props.showCreate) {
                return (
                    <Button bsSize='small' className='pull-right' onClick={component.handleCreate} bsStyle="success">
                        <Glyphicon glyph="plus" />
                    </Button>
                );
            }
        };
        return (
            <div className='story-toolbar'>
                <div>
                    <Input type='text' onChange={this.filterText} value={this.props.filterText} placeholder='Search for..' ref="filter" />
                </div>
                <div>
                    <ButtonGroup>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Toggle completed</Tooltip>}>
                            <Button bsSize='small' active={isActive('completed')} onClick={this.showCompleted} bsStyle="success">
                                <i className="fa fa-check"></i>
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Toggle in progress</Tooltip>}>
                            <Button bsSize='small' active={isActive('inProgress')} onClick={this.showInProgress} bsStyle="info">
                                <i className="fa fa-cogs"></i>
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Toggle not started</Tooltip>}>
                            <Button bsSize='small' active={isActive('notStarted')} onClick={this.showNotStarted} bsStyle="danger">
                                <i className="fa fa-ban"></i>
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Show all</Tooltip>}>
                           <Button bsSize='small' onClick={this.showAll} bsStyle="primary">
                                <i className="fa fa-asterisk"></i>
                            </Button>
                        </OverlayTrigger>
                    </ButtonGroup>
                </div>
                {showCreate()}
            </div>
        );
    },
    renderOverlay: function() {
        if (!this.state.isModalOpen) {
            return <span/>;
        }

        return (
            <CreateStoryModal onToggle={this.toggleModal} />
        );
    }
});

module.exports = StoryToolbar;
