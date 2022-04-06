import React, { Component } from 'react';

class ChatSnippet extends Component {
    
    renderUserImage(){
        return(
            <div className='col-2 snippet-dp pd-0'>
                <img src={this.props.contact.img} width='50px' height='50px'></img>
            </div>
        )
    }

    renderChatContactOverview(){
        return(
            <div className='col-10 chat-snippet-details'> 
                <span className='snippet-chatter-name'>{this.props.contact.name}</span>
                <div className='snippet-last-message'>
                    <div className='last-message'><b>{this.props.contact.lastMessageSender}:</b> {this.props.contact.lastMessage}</div>
                    <div className='last-message-time'>{this.props.contact.messageTime}</div>
                </div>
            </div>
        )
    }

    render() { 
        return (
                <div className='row chat-snippet' onClick={(e) => this.props.handleClick(this.props.contact, e)}>
                    {this.renderUserImage()}
                    {this.renderChatContactOverview()}
                </div>
        );
    }
}
 
export default ChatSnippet;