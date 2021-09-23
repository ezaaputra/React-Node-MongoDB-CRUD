import { useState } from 'react'
import { Link } from 'react-router-dom'
import './register.css'
import axios from 'axios'

export default function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const axiosInstance = axios.create({baseURL:process.env.REACT_APP_API_URL})

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axiosInstance.post("/auth/register", {
        username,
        email,
        password
      })
      res.data && window.location.replace('/login')
    } catch (err) {
      setError(true)
    }
  }

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your username"
          onChange={e => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your email"
          onChange={e => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password"
          onChange={e => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">LOGIN</Link>
      </button>
      {error && <span style={{color: 'lightcoral', marginTop: '10px'}}>Username or email already used</span>}
    </div>
  )
}
