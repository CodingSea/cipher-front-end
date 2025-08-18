import React from 'react';
import "./App.css";
import { jwtDecode } from 'jwt-decode'
import { BrowserRouter, Routes, Route } from 'react-router';
import SideContainer from '../components/SideContainer/SideContainer';
import MessagesContainer from '../components/MessagesContainer/MessagesContainer';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import LogoutButton from '../components/LogoutButton/LogoutButton';
import LoginForm from '../components/LoginForm/LoginForm';
import SignUp from '../components/SignupForm/SignupForm';

function App()
{
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
    console.log(decodedToken)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="/signup" element={<SignUp />} />
          <ProtectedRoute><div className='main'><SideContainer /><MessagesContainer /></div></ProtectedRoute>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;