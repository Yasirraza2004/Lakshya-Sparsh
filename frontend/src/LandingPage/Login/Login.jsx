import "./Login.css";

function Login() {
  return (
    <div className="portfolio-page">
      {/* Header Banner */}
      <section className="portfolio-banner">
        <div className="banner-content">
          <h1>Portfolio Tracker</h1>
          <p>Home / Portfolio Tracker</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="portfolio-container">
        {/* Existing Client */}
        <div className="client-section">
          <h2>
            <span className="user-icon"><i class="fa-solid fa-user"></i></span>
            Existing Clients
          </h2>

          <p className="section-description">
            Manage your existing Portfolio in terms of tracking and transaction
          </p>

          <div className="form-group">
            <label>Login ID</label>
            <input type="text" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>

          <div className="login-options">
            <label>
              <input type="radio" name="userType" defaultChecked />
              <span>Clients</span>
            </label>

            <label>
              <input type="radio" name="userType" />
              <span className="advisor">Advisor</span>
            </label>

            <a href="#">Trouble Loging in?</a>
          </div>

          <button className="secure-login"><i class="fa-solid fa-lock"></i> Secure Login</button>
        </div>

        {/* New User */}
        <div className="new-user-section">
          <h2>
            <span className="user-icon"><i class="fa-solid fa-user-plus"></i></span>
            New User
          </h2>

          <p className="section-description">
            Quickly register with us and start enjoying various free services
            like Financial Planning, Portfolio Tracking etc.
          </p>

          <div className="new-user-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" />
            </div>

            <div className="dob-section">
              <div className="form-group">
                <label>DOB- Date</label>
                <select>
                  <option value="">Year</option>
                  {Array.from({ length: 76 }, (_, i) => {
                    const year = new Date().getFullYear() - i;
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  })}
                </select>
              </div>

              <div className="form-group">
                <label>Month</label>
                <select>
                  <option value="">Month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {new Date(2000, i).toLocaleString("en", {
                        month: "long",
                      })}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Date</label>
                <select>
                  <option value="">Date</option>
                  {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email Id</label>
                <input type="email" />
              </div>

              <div className="form-group">
                <label>Mobile</label>
                <input type="tel" />
              </div>
            </div>
          </div>

          <p className="privacy-text">
            Your data will private and secure with us it will not use for any
            further marketing purpose.
          </p>

          <button className="create-account"><i class="fa-solid fa-lock"></i> Create your account now</button>
        </div>
      </section>
    </div>
  );
}

export default Login;
