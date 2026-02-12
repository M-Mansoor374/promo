import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    emailOrUsername: '',
    password: '',
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'emailOrUsername':
        if (!value.trim()) return 'Email or username is required';
        return '';
      case 'password':
        if (!value) return 'Password is required';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));

    if (errors[name]) {
      const error = validateField(name, fieldValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    newErrors.emailOrUsername = validateField('emailOrUsername', formData.emailOrUsername);
    newErrors.password = validateField('password', formData.password);

    const filteredErrors = {};
    Object.keys(newErrors).forEach((key) => {
      if (newErrors[key]) filteredErrors[key] = newErrors[key];
    });

    setErrors(filteredErrors);

    if (Object.keys(filteredErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        // Handle login logic here
      }, 1500);
    }
  };

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-left-content">
            <h2 className="login-left-title">Welcome Back</h2>
            <p className="login-left-desc">
              Log in to access your audience engagement tools, manage campaigns,
              and track your organic growth assistance analytics.
            </p>
            <div className="login-left-features">
              <div className="login-left-feature">
                <span className="login-feature-icon">📊</span>
                <span>View your analytics dashboard</span>
              </div>
              <div className="login-left-feature">
                <span className="login-feature-icon">🚀</span>
                <span>Manage active campaigns</span>
              </div>
              <div className="login-left-feature">
                <span className="login-feature-icon">🪙</span>
                <span>Check your coin balance</span>
              </div>
              <div className="login-left-feature">
                <span className="login-feature-icon">🎮</span>
                <span>Play games to earn free coins</span>
              </div>
            </div>
          </div>
        </div>

        <div className="login-right">
          <div className="login-form-card">
            <h1 className="login-form-title">Log In</h1>
            <p className="login-form-subtitle">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="login-link">
                Register here
              </Link>
            </p>

            <form className="login-form" onSubmit={handleSubmit} noValidate>
              {/* Email / Username */}
              <div className={`login-field ${errors.emailOrUsername ? 'login-field-error' : ''}`}>
                <label className="login-label" htmlFor="emailOrUsername">
                  Email or Username
                </label>
                <div className="login-input-wrapper">
                  <span className="login-input-icon">📧</span>
                  <input
                    type="text"
                    id="emailOrUsername"
                    name="emailOrUsername"
                    className="login-input"
                    placeholder="Enter your email or username"
                    value={formData.emailOrUsername}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="username"
                  />
                </div>
                {errors.emailOrUsername && (
                  <span className="login-error">{errors.emailOrUsername}</span>
                )}
              </div>

              {/* Password */}
              <div className={`login-field ${errors.password ? 'login-field-error' : ''}`}>
                <label className="login-label" htmlFor="password">
                  Password
                </label>
                <div className="login-input-wrapper">
                  <span className="login-input-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="login-input"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    className="login-toggle-pw"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {errors.password && (
                  <span className="login-error">{errors.password}</span>
                )}
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="login-options">
                <label className="login-checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    className="login-checkbox"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                  />
                  <span className="login-checkbox-custom"></span>
                  <span className="login-checkbox-text">Remember me</span>
                </label>
                <Link to="/forgot-password" className="login-forgot">
                  Forgot password?
                </Link>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`login-submit-btn ${isSubmitting ? 'login-submit-loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="login-spinner"></span>
                ) : (
                  'Log In'
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="login-divider">
              <span className="login-divider-line"></span>
              <span className="login-divider-text">or</span>
              <span className="login-divider-line"></span>
            </div>

            {/* Register CTA */}
            <div className="login-register-cta">
              <p className="login-register-text">New to MSH Social Hub?</p>
              <Link to="/register" className="login-register-btn">
                Create an Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

