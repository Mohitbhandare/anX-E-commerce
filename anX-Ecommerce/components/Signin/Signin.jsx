import { useState } from 'react';
import './Signin.css';

function Signin() {
  const [fullName, setFullName] = useState('');
  const [mobielNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: handle signin logic here
  };

  return (
    <div>
      <div className="flex-container-sign">
        <div className="itmes-1"></div>
        {/* Sign in form */}
        <div className="itmes-2">
          <div className="heading-for-sign">
            <h1>Welcome Sign In Here</h1>
            <p>Fill The Form To Create Your Account</p>
          </div>
          <div className="signin-form">
            <form onSubmit={handleSubmit}>
              <div className="flex-name-item-1">
                <label className="label-name">Full Name</label>
                <input
                  className="input-name"
                  type="text"
                  placeholder="full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="flex-mobile-item-2">
                <label className="label-mobile">Mobile no.</label>
                <input
                  className="input-mobile"
                  type="tel"
                  placeholder="mobile no."
                  value={mobielNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                />
              </div>

              <div className="flex-email-item-3">
                <label className="label-email">Email</label>
                <input
                  className="input-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex-pass-item-4">
                <label className="label-password">Password</label>
                <input
                  className="input-password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="btn-signin" type="submit">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
