import { useState } from 'react';
import { CartLogo, SearchLogo, SearchPopup } from '../index.js';
import './Header.css';

function Header() {
  // const [search, setSearch] = useState('');
  const [popup, setPopup] = useState('');

  const handleClick = () => {
    setPopup(true);
  };

  return (
    <nav className="nav-container">
      <div className="logo-items-1">
        <h1>anX</h1>
      </div>
      <div className="middle-items-2">
        {/* <div className="search-bar-3">
          <input
            className="search-input"
            type="search"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div> */}
      </div>
      <div className="end-items-3">
        <div className="home-items-1">Home</div>
        <div className="category-items-2">
          <button className="btn-category">Category</button>
        </div>
        <div className="search-items-4">
          <SearchLogo onClick={handleClick} />
          <SearchPopup trigger={popup}></SearchPopup>
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
