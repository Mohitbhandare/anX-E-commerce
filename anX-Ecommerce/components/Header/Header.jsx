import { useState } from 'react';
import { CartLogo, SearchLogo } from '../index.js';
import './Header.css';

function Header() {
  const [search, setSearch] = useState('');

  return (
    <nav className="nav-container">
      <div className="logo-items-1">
        <h1>anX</h1>
      </div>
      <div className="middle-items-2">
        <div className="home-items-1">Home</div>
        <div className="category-items-2">Category</div>
        <div className="search-bar-3">
          <input
            className="search-input"
            type="search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="end-items-3">
        <div className="search-items-4">
          <SearchLogo />
        </div>
        <div className="cart-items-1">
          <CartLogo />
        </div>
        <div className="login-items-2">Login</div>
        <div className="signup-items-3">Sign up</div>
      </div>
    </nav>
  );
}

export default Header;
