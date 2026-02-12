import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    referralCode: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const getPasswordStrength = (password) => {
    if (!password) return { level: 0, label: '', color: '' };
    let score = 0;
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) return { level: 1, label: 'Weak', color: '#e53e3e' };
    if (score <= 3) return { level: 2, label: 'Fair', color: '#ed8936' };
    if (score <= 4) return { level: 3, label: 'Good', color: '#ecc94b' };
    if (score <= 5) return { level: 4, label: 'Strong', color: '#48bb78' };
    return { level: 5, label: 'Very Strong', color: '#20b2aa' };
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'fullName':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return 'Please enter a valid email address';
        return '';
      case 'password':
        if (!value) return 'Password is required';
        if (value.length < 8) return 'Password must be at least 8 characters';
        if (!/[A-Z]/.test(value))
          return 'Password must include an uppercase letter';
        if (!/[0-9]/.test(value)) return 'Password must include a number';
        return '';
      case 'confirmPassword':
        if (!value) return 'Please confirm your password';
        if (value !== formData.password) return 'Passwords do not match';
        return '';
      case 'agreeTerms':
        if (!value) return 'You must agree to the terms';
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
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    const error = validateField(name, fieldValue);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (key === 'referralCode') return;
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 1500);
    }
  };

  const passwordStrength = getPasswordStrength(formData.password);

  if (submitSuccess) {
    return (
      <div className="reg-page">
        <div className="reg-wrapper">
          <div className="reg-success-card">
            <div className="reg-success-icon">✅</div>
            <h2 className="reg-success-title">Account Created!</h2>
            <p className="reg-success-text">
              Your MSH Social Hub account has been created successfully. You can
              now log in and start using our audience engagement tools.
            </p>
            <Link to="/login" className="reg-success-btn">
              Go to Login
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="reg-page">
      <div className="reg-wrapper">
        <div className="reg-left">
          <div className="reg-left-content">
            <h2 className="reg-left-title">Join MSH Social Hub</h2>
            <p className="reg-left-desc">
              Access audience engagement tools, organic growth assistance, and our
              marketing & analytics platform.
            </p>
            <div className="reg-left-features">
              <div className="reg-left-feature">
                <span className="reg-feature-icon">🪙</span>
                <span>50 Free Coins on signup</span>
              </div>
              <div className="reg-left-feature">
                <span className="reg-feature-icon">📊</span>
                <span>Access to analytics dashboard</span>
              </div>
              <div className="reg-left-feature">
                <span className="reg-feature-icon">🎮</span>
                <span>Earn coins with Free Games</span>
              </div>
              <div className="reg-left-feature">
                <span className="reg-feature-icon">🚀</span>
                <span>Launch your first campaign</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reg-right">
          <div className="reg-form-card">
            <h1 className="reg-form-title">Create Account</h1>
            <p className="reg-form-subtitle">
              Already have an account?{' '}
              <Link to="/login" className="reg-link">
                Log in
              </Link>
            </p>

            <form className="reg-form" onSubmit={handleSubmit} noValidate>
              {/* Full Name */}
              <div className={`reg-field ${errors.fullName ? 'reg-field-error' : ''}`}>
                <label className="reg-label" htmlFor="fullName">
                  Full Name <span className="reg-required">*</span>
                </label>
                <div className="reg-input-wrapper">
                  <span className="reg-input-icon">👤</span>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="reg-input"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="name"
                  />
                </div>
                {errors.fullName && (
                  <span className="reg-error">{errors.fullName}</span>
                )}
              </div>

              {/* Email */}
              <div className={`reg-field ${errors.email ? 'reg-field-error' : ''}`}>
                <label className="reg-label" htmlFor="email">
                  Email Address <span className="reg-required">*</span>
                </label>
                <div className="reg-input-wrapper">
                  <span className="reg-input-icon">📧</span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="reg-input"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="email"
                  />
                </div>
                {errors.email && (
                  <span className="reg-error">{errors.email}</span>
                )}
              </div>

              {/* Password */}
              <div className={`reg-field ${errors.password ? 'reg-field-error' : ''}`}>
                <label className="reg-label" htmlFor="password">
                  Password <span className="reg-required">*</span>
                </label>
                <div className="reg-input-wrapper">
                  <span className="reg-input-icon">🔒</span>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className="reg-input"
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="reg-toggle-pw"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {formData.password && (
                  <div className="reg-pw-strength">
                    <div className="reg-pw-bars">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div
                          key={i}
                          className="reg-pw-bar"
                          style={{
                            background:
                              i <= passwordStrength.level
                                ? passwordStrength.color
                                : '#e2e8f0',
                          }}
                        ></div>
                      ))}
                    </div>
                    <span
                      className="reg-pw-label"
                      style={{ color: passwordStrength.color }}
                    >
                      {passwordStrength.label}
                    </span>
                  </div>
                )}
                {errors.password && (
                  <span className="reg-error">{errors.password}</span>
                )}
              </div>

              {/* Confirm Password */}
              <div
                className={`reg-field ${errors.confirmPassword ? 'reg-field-error' : ''}`}
              >
                <label className="reg-label" htmlFor="confirmPassword">
                  Confirm Password <span className="reg-required">*</span>
                </label>
                <div className="reg-input-wrapper">
                  <span className="reg-input-icon">🔒</span>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    id="confirmPassword"
                    name="confirmPassword"
                    className="reg-input"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    className="reg-toggle-pw"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    aria-label="Toggle confirm password visibility"
                  >
                    {showConfirmPassword ? '🙈' : '👁️'}
                  </button>
                </div>
                {formData.confirmPassword &&
                  formData.confirmPassword === formData.password && (
                    <span className="reg-match">✓ Passwords match</span>
                  )}
                {errors.confirmPassword && (
                  <span className="reg-error">{errors.confirmPassword}</span>
                )}
              </div>

              {/* Referral Code */}
              <div className="reg-field">
                <label className="reg-label" htmlFor="referralCode">
                  Referral Code <span className="reg-optional">(Optional)</span>
                </label>
                <div className="reg-input-wrapper">
                  <span className="reg-input-icon">🎁</span>
                  <input
                    type="text"
                    id="referralCode"
                    name="referralCode"
                    className="reg-input"
                    placeholder="Enter referral code if you have one"
                    value={formData.referralCode}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                </div>
              </div>

              {/* Terms */}
              <div
                className={`reg-field reg-checkbox-field ${errors.agreeTerms ? 'reg-field-error' : ''}`}
              >
                <label className="reg-checkbox-label">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    className="reg-checkbox"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="reg-checkbox-custom"></span>
                  <span className="reg-checkbox-text">
                    I agree to the{' '}
                    <Link to="/terms-of-service" className="reg-link">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy" className="reg-link">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.agreeTerms && (
                  <span className="reg-error">{errors.agreeTerms}</span>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`reg-submit-btn ${isSubmitting ? 'reg-submit-loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="reg-spinner"></span>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

