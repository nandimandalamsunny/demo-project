import { useState } from 'react'
import './ForgotPassword.css'

interface ForgotPasswordProps {
  onBackToLogin: () => void
}

function ForgotPassword({ onBackToLogin }: ForgotPasswordProps) {
  const [email, setEmail] = useState('')

  const isFormValid = email.trim() !== ''

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // UI-only behavior, no actual API call
    console.log('Password reset requested for:', email)
  }

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h1 className="forgot-password-title">Forgot Password</h1>
        
        <p className="forgot-password-description">
          Enter your email address and we'll send you a link to reset your password.
        </p>

        <form className="forgot-password-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <button
            type="submit"
            className={`submit-button ${!isFormValid ? 'disabled' : ''}`}
            disabled={!isFormValid}
          >
            Send Reset Link
          </button>
        </form>

        <div className="back-to-login-section">
          <button
            type="button"
            className="back-to-login-link"
            onClick={onBackToLogin}
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword
