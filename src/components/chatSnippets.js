import React, { Component } from 'react';
import axios from 'axios';

import '../static/css/chatSnippet.css';

import ChatSnippet from './chatSnippet';
// const ChatSnippet = React.lazy(() => import('./chatSnippet'))

class ChatSnippets extends Component {
    state = { 
        error: null,
        loading: false,
        contacts:[]
     } 

    
    handleContactList(){
        console.log(this.state.contacts.length)

        return <div>
            {
            this.state.contacts.map(c => {
                return <ChatSnippet key={c.id} contact={c} handleClick={this.props.handleMsgId}/>
            })
        }
        </div>

    }

    componentDidMount(){
        this.setState((prevState) => {
            return ({...prevState, loading: true})
        })
        setTimeout(this.fetchContactDetails.bind(this), 5000)
    }

    fetchContactDetails(){
        axios.get('http://localhost:3000/sample_json/contacts.json')
            .then(res => {
                this.setState((prevState) => {
                    return ({...prevState, contacts: res.data.contacts, error: false, loading: false})
                })
            })
            .catch(error => {
                this.setState((prevState) => {
                    return ({...prevState, error, loading:false})
                })
            })
    }

    renderSearchBox(){
        return (
                <div className="form-floating chat-snippet-searchbox">
                    <input className='textbox-input form-control' type="searchbox"/>
                    <label className='searchbox-label'>Search</label>
                </div>
        );
    }

    render() {
        const errorElement = (<div className='error'>
                    Unable to load the latest chat contacts.
                    <a className='mg-5 btn error' onClick={this.fetchContactDetails.bind(this)}>
                        <i className="app-icon icon-cw">&#xe803;</i>
                    </a>
                </div>) 
        return(
            <div className='col-3 chat-snippet-ls'>
                {this.renderSearchBox()}            
                {this.state.error && errorElement}
                {this.state.loading && <div className='center'><i className="app-icon icon-spin6 rotate360">&#xe839;</i></div>}
                {this.handleContactList()}
            </div>
        );
    }
}
 
export default ChatSnippets;