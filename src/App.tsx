import { useState } from 'react'
import './App.css'
import ForgotPassword from './ForgotPassword'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const isFormValid = email.trim() !== '' && password.trim() !== ''

  const handleLogin = () => {
    // UI-only behavior, no actual login
    console.log('Login attempted with:', { email, password })
  }

  const handleForgotPassword = () => {
    // Show forgot password screen
    setShowForgotPassword(true)
  }

  const handleBackToLogin = () => {
    // Return to login screen
    setShowForgotPassword(false)
  }

  if (showForgotPassword) {
    return <ForgotPassword onBackToLogin={handleBackToLogin} />
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        
        <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email or Username</label>
            <input
              id="email"
              type="text"
              className="form-input"
              placeholder="Enter your email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="password-input-wrapper">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                className="form-input password-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className={`login-button ${!isFormValid ? 'disabled' : ''}`}
            disabled={!isFormValid}
          >
            Login
          </button>
        </form>

        <div className="forgot-password-section">
          <button
            type="button"
            className="forgot-password-link"
            onClick={handleForgotPassword}
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
