import React, { Component } from 'react';
import Message from './message';
import axios from 'axios';

import '../static/css/scrollbar.css';
import '../static/css/fonts.css'


class MessageContainer extends Component {
    state = {
        myId : '1',
        loading: false,
        error: false,
        messages : []
    }

    renderMsgContainer(){
        const myId = this.state.myId;
        return(
            // [...this.state.messages].reverse().map(m => {
            this.state.messages.map(m => {  
                return <Message message={m} myId={myId}/>
            })
        )
    }

    setLoading(){
        this.setState((prevState) => {
            return ({...prevState, loading: true, error: false, messages:[]})
        });
    }

    componentDidMount(){
        // After implementing real Http call, remove this setTimeout fn
        this.setLoading()
        setTimeout(this.fetchMessageArchive.bind(this, this.props.msgTransId), 5000);
    }

    componentDidUpdate(prevProps){
        if (this.props.msgTransId != prevProps.msgTransId){
            this.setLoading();
            setTimeout(this.fetchMessageArchive.bind(this, this.props.msgTransId), 5000);
        }        
    }

    fetchMessageArchive(msgTransId){
        axios.get('http://localhost:3000/sample_json/message.json')
            .then(res => {
                this.setState((prevState) => {
                    return ({...prevState, messages: res.data.messages, error: false, loading: false})
                })
            })
            .catch(error => {
                this.setState((prevState) => {
                    return ({...prevState, error, loading:false})
                })
            })
    }

    render() { 
        const errorElement = (<div className='error'>
                    Unable to load messages.
                    <a className='mg-5 btn error' onClick={this.fetchMessageArchive.bind(this)}>
                        <i className="app-icon icon-cw">&#xe803;</i>
                    </a>
                </div>) 
        return (
            <div className='messages-ls-container'>
                {this.state.loading && <div className='center'><i className="app-icon icon-spin6 rotate360">&#xe839;</i></div>}
                {this.state.error && errorElement}
                <ul className='pd-0 mg-0'>
                    {this.renderMsgContainer()}
                </ul>
            </div>
        );
    }
}
 
export default MessageContainer;