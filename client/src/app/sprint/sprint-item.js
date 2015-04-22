'use strict';

var React = require('react/addons'),
    OverlayMixin = require('react-bootstrap').OverlayMixin,
    Button = require('react-bootstrap').Button,
    ButtonGroup = require('react-bootstrap').ButtonGroup,
    Glyphicon = require('react-bootstrap').Glyphicon,
    EditSprintModal = require('./edit-sprint-modal'),
    SprintInteractions = require('./sprint.interactions'),
    Confirm = require('../../components/confirm/confirm-dialog'),
    ModalTrigger = require('react-bootstrap').ModalTrigger,
    OverlayTrigger = require('react-bootstrap').OverlayTrigger,
    Tooltip = require('react-bootstrap').Tooltip;

require('./sprint.scss');

var SprintItem = React.createClass({
    mixins: [OverlayMixin],
    getInitialState: function() {
        return {
            isModalOpen: false
        };
    },
    toggleModal: function() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    },
    handleEdit: function() {
        this.toggleModal();
    },
    handleDelete: function() {
        SprintInteractions.delete(this.props.sprint);
    },
    render: function() {
        var sprint = this.props.sprint;
        var getStatus = function() {
            var status,
                start = new Date(sprint.start),
                end = new Date(sprint.end),
                now = new Date().getTime();

            //Set time of start to 00:00:00
            start.setHours(0);
            start.setMinutes(0);
            start.setSeconds(0);

            //Set time of end to 23:59:59
            end.setHours(23);
            end.setMinutes(59);
            end.setSeconds(59);

            //Convert date to milliseconds from 1970
            start = start.getTime();
            end = end.getTime();

            // If now is later than end
            if (now > end) {
                status = 'bg-success';
            }
            //If now is between start and end
            if (now > start && now < end) {
                status = 'bg-warning';
            }
            //If now is before start
            if (now < start) {
                status = 'bg-danger';
            }
            return 'sprint-item ' + status;
        };

        var start = new Date(sprint.start).toDateString();
        var end = new Date(sprint.end).toDateString();

        return (
            <div className={getStatus()}>
                <div className="pull-right">
                    <ButtonGroup>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Edit sprint</Tooltip>}>
                            <Button onClick={this.handleEdit} bsSize="small" bsStyle="primary">
                                <Glyphicon glyph="cog" />
                            </Button>
                        </OverlayTrigger>
                        <OverlayTrigger placement='top' overlay={<Tooltip>Delete sprint</Tooltip>}>
                            <ModalTrigger modal={<Confirm bsStyle='danger' onConfirm={this.handleDelete} message='Are you sure you want to delete this sprint?' action='Delete' />}>
                                <Button bsSize="small" bsStyle="danger">
                                    <Glyphicon glyph="trash" />
                                </Button>
                            </ModalTrigger>
                        </OverlayTrigger>
                    </ButtonGroup>
                </div>
                <h4>{sprint.name} <small>({start} - {end})</small> </h4>
                <b>Goal:</b> <span>{sprint.goal}</span>
            </div>
        );
    },
    renderOverlay: function() {
        if (!this.state.isModalOpen) {
            return <span/>;
        }

        return (
            <EditSprintModal sprint={this.props.sprint} onToggle={this.toggleModal} />
        );
    }
});

module.exports = SprintItem;
