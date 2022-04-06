import React, {Suspense} from 'react';

const ChatDetails = React.lazy(() => import('./chatDetails'));


class ChatViewHolder extends React.Component{

    renderChatHolder(){
        if (this.props.selectedChatSnippet){            
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <ChatDetails selectedChatSnippet={this.props.selectedChatSnippet} handleMsgId={this.props.handleMsgId}/>
                </Suspense>
            )
        }
        return (
            <div className='default-chat-holder'>
                Well, we are on the way.<br/>
                Until we reach, we greatly appreciate your patience.
            </div>
        )
    }

    render(){ 
        let classList = 'col-9 chat-view-holder ';
        classList += this.props.selectedChatSnippet ? '' : 'display-flex';  
        
        return(
            <div className={classList}>
                {this.renderChatHolder()}
            </div>
        );
    }
}

export default ChatViewHolder;