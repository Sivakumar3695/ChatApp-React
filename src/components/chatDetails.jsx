import React, { Component } from 'react';

import ChatHeader from './chatHeader';
import MessageContainer from './messageContainer';
import MessageInput from './messageInput';

import '../static/css/chatDetails.css';

class ChatDetails extends Component {
    render() { 
        return (
            <React.Fragment>
                <ChatHeader chatContact={this.props.selectedChatSnippet} close={this.props.handleMsgId}/>
                <MessageContainer msgTransId={this.props.selectedChatSnippet.id}/>
                <MessageInput/>
            </React.Fragment>
        );
    }
}
 
export default ChatDetails;