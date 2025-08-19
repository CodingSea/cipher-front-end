import { useNavigate } from 'react-router'

function LogoutButton({ onLogout }) {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token')
    onLogout()
    navigate('/auth/login')
  }

  return (
    <button 
      onClick={handleLogout} 
    >
      Logout
    </button>
  )
}

export default LogoutButton