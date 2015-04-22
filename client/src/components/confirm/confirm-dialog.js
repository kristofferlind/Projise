'use strict';

var React = require('react/addons'),
    Modal = require('react-bootstrap').Modal,
    Button = require('react-bootstrap').Button;

var ConfirmDialog = React.createClass({
    render: function() {
        return (
            <Modal bsStyle={this.props.bsStyle} title="Are you sure?" onRequestHide={this.props.onRequestHide}>
                <div className='modal-body'>
                    <p>{this.props.message}</p>
                    <Button className='pull-right' bsStyle={this.props.bsStyle} onClick={this.props.onConfirm}>{this.props.action}</Button>
                    <Button className='pull-right' onClick={this.props.onRequestHide}>Cancel</Button>
                    <br />
                </div>
            </Modal>
        );
    }
});

module.exports = ConfirmDialog;
