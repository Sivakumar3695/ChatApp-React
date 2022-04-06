import React from 'react';
import TopNavBar from './components/topNavBar';
import MainContainer from './components/mainContainer';

function App() {
  return (
    <React.Fragment>
        <TopNavBar/>
        <div className='container'>
          <div className='row main-container'>
            <MainContainer/>
          </div>
        </div>
    </React.Fragment>
  );
}

export default App;
