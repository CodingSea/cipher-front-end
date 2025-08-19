import { useState } from 'react'
import { useNavigate } from 'react-router'
import axios from 'axios'
function LoginForm({ onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async event => {
    event.preventDefault()
    try {
      const res = await axios.post('http://localhost:3000/auth/login', {
        username,
        password
      })
      localStorage.setItem('token', res.data.token)
      onLogin(res.data.token)
      navigate('/home')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label htmlFor="Username">Username:</label>
      <input 
        name='Username'
        placeholder="Username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <label htmlFor="password">Password: </label>
      <input 
        name='password'
        placeholder="Password"
        type="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm