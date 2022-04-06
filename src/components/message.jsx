import React, { Component } from 'react';

class Message extends Component {

    renderFriendMsg(){
        return(
            <div className='message my-friend-msg'>
                <div className='msg-txt-content'>{this.props.message.content}</div>
                <div className='msg-time'>{this.props.message.sentTime}</div>
            </div>
        )
    }

    renderMyMsg(){
        return(
            <div className='message my-msg'>
                <div className='msg-txt-content'>{this.props.message.content}</div>
                <div className='msg-time'>{this.props.message.sentTime}</div>
            </div>
        )
    }

    renderMsg(){
        if (this.props.message.sentUserID === this.props.myId){
            return this.renderMyMsg();
        }
        else{
            return this.renderFriendMsg();
        }

    }

    render() { 
        return (
            <li className='message-row'>
                {this.renderMsg()}
            </li>
        );
    }
}
 
export default Message;