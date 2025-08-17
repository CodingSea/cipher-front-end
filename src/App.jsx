import React from 'react'
import "./App.css";
import SideContainer from './components/SideContainer/SideContainer';
import MessagesContainer from './components/MessagesContainer/MessagesContainer';

function App()
{
  return (
    <>
      
      <div className='main'>
        <SideContainer />
        <MessagesContainer />
      </div>
    </>
  )
}

export default App;