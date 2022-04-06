import React, { Component } from 'react';
import '../static/css/fonts.css'

class ChatHeader extends Component {
    
    renderUserDetails(){
        return(
            <div className='chat-header-dp'>
                        <img className='mg-15' src={this.props.chatContact.img} width='75px' height='75px'></img>
                        <div className='chat-header-user-name'>
                            <span className='align-middle'>{this.props.chatContact.name}</span>
                        </div>
            </div>
        )
    }
    renderIcons(){
        return(
            <div className='chat-header-icons-right'>
                        <div>
                            <a className='mg-5 btn'>
                                <i className="app-icon icon-videocam">&#xe800;</i>
                            </a>
                        </div>

                        <div >
                            <a className='mg-5 btn'>
                                <i className="app-icon icon-phone">&#xe801;</i>
                            </a>
                        </div>
                        <div>
                            <a className='mg-5 btn' onClick={(e) => this.props.close(null, e)}>
                                <i className="app-icon icon-cancel">&#xe802;</i>
                            </a>
                        </div>
            </div>
        );
    }

    render() { 
        return (
            <div className='chat-header'>
                    {this.renderUserDetails()}
                    {this.renderIcons()}
            </div>
        );
    }
}
 
export default ChatHeader;