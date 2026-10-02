import "./Login.css";
import { useState } from "react";


function Login() {
  // Create Account states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  // Login states
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  return (
    <div className="auth-page">

      {/* ================= CREATE ACCOUNT ================= */}

      <div className="auth-container signup-container">

        <div className="auth-content">

          <div className="auth-header">
            <h1>Create Account</h1>

            <p>
              Start your financial journey with Lakshya Sparsh
            </p>
          </div>

          <form>

            {/* Full Name */}

            <div className="form-group">
              <label htmlFor="name">
                Full Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>


            {/* Phone Number */}

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number
              </label>

              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>


            {/* Date of Birth */}

            <div className="form-group">
              <label htmlFor="dob">
                Date of Birth
              </label>

              <input
                type="date"
                id="dob"
                name="dob"
                value={dob}
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </div>


            {/* Email */}

            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>


            {/* Password */}

            <div className="form-group">
              <label htmlFor="password">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>


            {/* Create Account Button */}

            <button
              type="submit"
              className="auth-btn"
            >
              Create Account
            </button>

          </form>

        </div>

      </div>


      {/* ================= LOGIN ================= */}

      <div className="auth-container login-container">

        <div className="auth-content login-content">

          <div className="auth-header">
            <h1>Welcome Back</h1>

            <p>
              Login to continue your financial journey
            </p>
          </div>

          <form>

            {/* Email */}

            <div className="form-group">
              <label htmlFor="loginEmail">
                Email Address
              </label>

              <input
                type="email"
                id="loginEmail"
                name="loginEmail"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>


            {/* Password */}

            <div className="form-group">
              <label htmlFor="loginPassword">
                Password
              </label>

              <input
                type="password"
                id="loginPassword"
                name="loginPassword"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>


            {/* Forgot Password */}

            <div className="forgot-password">
              <span>
                Forgot Password?
              </span>
            </div>


            {/* Login Button */}

            <button
              type="submit"
              className="auth-btn"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;

