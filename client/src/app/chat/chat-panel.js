'use strict';

var React = require('react/addons'),
    RequireAuthentication = require('../require-authentication'),
    MessageStore = require('./message.store'),
    ChatInteractions = require('./chat.interactions'),
    Input = require('react-bootstrap').Input;

require('./chat-panel.scss');

var ChatPanel = React.createClass({
    mixins: [RequireAuthentication],
    getInitialState: function() {
        return {
            messages: MessageStore.getAll()
        };
    },
    componentDidMount: function() {
        ChatInteractions.loadAll();
        MessageStore.addChangeListener(this.onMessageChange);
        var chatMessagesBox = this.getDOMNode().querySelector('.chat-messages');
        chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
    },
    componentWillUnmount: function() {
        MessageStore.removeChangeListener(this.onMessageChange);
    },
    componentDidUpdate: function() {
        var chatMessagesBox = this.getDOMNode().querySelector('.chat-messages');
        chatMessagesBox.scrollTop = chatMessagesBox.scrollHeight;
    },
    onMessageChange: function() {
        this.setState({
            messages: MessageStore.getAll(),
        });
    },
    sendMessage: function(event) {
        if (event.keyCode === 13) {
            if (event.shiftKey) {
                //shift+enter
                return;
            }
            event.preventDefault();

            var text = this.refs.message.getValue();
            if (text.length < 2) {
                return;
            }
            var message = {
                message: text
            };

            ChatInteractions.create(message);
            var input = this.refs.message.getInputDOMNode();
            input.value = '';
        }
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

        var messages = this.state.messages.map(function(message) {
            return (
                <div key={message._id} className='chat-message'>
                    <div className="chat-message-body">
                        <img className="userimage" src="http://www.gravatar.com/avatar/{{message.user.md5Hash}}" />
                        <b>{message.user.userName}:</b> {message.message}
                    </div>
                </div>
            );
        });

        return (
            <section id="chat-panel" className={getClassName()}>
                <div className='chat-messages'>
                    {messages}
                </div>
                <div className='chat-form'>
                    <Input onKeyDown={this.sendMessage} type='textarea' ref='message' />
                </div>
            </section>
        );
    }
});

module.exports = ChatPanel;
