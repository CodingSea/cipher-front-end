import { useNavigate } from 'react-router'

function LogoutButton({ onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => 
  {
    onLogout()
    navigate('/auth/login')
  }

  return (
    <button onClick={handleLogout} >
      Logout
    </button>
  )
}

export default LogoutButton