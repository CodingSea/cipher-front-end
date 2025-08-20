import React, { useState } from 'react';
import "./App.css";
import { jwtDecode } from 'jwt-decode';
import { BrowserRouter, Routes, Route } from 'react-router';
import SideContainer from './components/SideContainer/SideContainer';
import MessagesContainer from './components/MessagesContainer/MessagesContainer';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import LogoutButton from './components/LogoutButton/LogoutButton';
import LoginForm from './components/LoginForm/LoginForm';
import SignUp from './components/SignupForm/SignupForm';

function App()
{
  const [messages, setMessages] = useState([]);
  const [currentServer, setCurrentServer] = useState();
  const [currentChannel, setCurrentChannel] = useState();

  const [token, setToken] = useState(localStorage.getItem('token'))

  function handleLogin(newToken)
  {
    setToken(newToken)
  }

  function handleLogout()
  {
    setToken(null)
    localStorage.removeItem('token')
  }
  if (token)
  {
    const decodedToken = jwtDecode(token)
  }

  return (
    <>
      <BrowserRouter>
        { token ? <LogoutButton onLogout={ handleLogout } /> : null }
        <Routes>
          <Route path="/auth/login" element={ <LoginForm onLogin={ handleLogin } /> } />
          <Route path="/auth/signup" element={ <SignUp /> } />
          <Route path='/Home' element={
            <ProtectedRoute>
              <div className='main'>
                <SideContainer setMessages={ setMessages } currentServer={currentServer} setCurrentServer={setCurrentServer} setCurrentChannel={setCurrentChannel} />
                <MessagesContainer messages={ messages } setMessages={ setMessages } currentServer={currentServer} currentChannel={currentChannel}  />
              </div>
            </ProtectedRoute> } />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;