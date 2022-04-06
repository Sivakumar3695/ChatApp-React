import React, { Component } from 'react';

class MessageInput extends Component {

    render() { 
        return (
            <div className="msg-input-div">
                <input className="form-control textbox-input" placeholder="Type your message here"/>
                <div className='mg-15 send-icon'>
                    <i className="app-icon icon-paper-plane">&#xf1d8;</i>
                </div>
            </div>
        );
    }
}
 
export default MessageInput;