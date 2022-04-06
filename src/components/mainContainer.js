import React, {Suspense} from 'react';
// import ChatViewHolder from './chatViewHolder';

import '../static/css/mainContainer.css';

const ChatSnippets = React.lazy(() => import('./chatSnippets'))
const ChatViewHolder = React.lazy(() => import('./chatViewHolder'))

class MainContainer extends React.Component{
    state = {
        selectedChatSnippet : null
    }

    handleMsgId = (contact) => {
        this.setState((prevState) => {
            return {...prevState, selectedChatSnippet : contact}
        });
    }

    render(){    
        return(
            <React.Fragment>
                <Suspense fallback={<div>Loading...</div>}>
                    <ChatSnippets handleMsgId={this.handleMsgId}/>
                    <ChatViewHolder selectedChatSnippet={this.state.selectedChatSnippet} handleMsgId={this.handleMsgId}/>
                </Suspense>
            </React.Fragment>
            
        );
    }
}

export default MainContainer;