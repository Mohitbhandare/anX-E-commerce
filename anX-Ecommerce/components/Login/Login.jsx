import { useState } from 'react';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle login logic here
  };

  return (
    <div>
      <div className="flex-container">
        <div className="itmes-1"></div>
        {/* login form */}
        <div className="itmes-2">
          <div className="heading">
            <h1>Welcome</h1>
            <p>Enter your email and password to access youe account</p>
          </div>
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <div className="flex-email-item-1">
                <label className="label-email">Email</label>
                <input
                  className="input-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex-email-item-2">
                <label className="label-password">Password</label>
                <input
                  className="input-password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="forgot-pass">Forgot Password</div>
              <button type="submit">Login in</button>
            </form>
            <div className="signup-link">Create account//Sign Up</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
