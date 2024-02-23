import { useState } from 'react';
import { CartLogo, SearchLogo, SearchPopup } from '../index.js';
import './Header.css';

function Header() {
  const [search, setSearch] = useState('');
  const [buttonPopup, setButtonPopup] = useState(false);

  const handleClick = () => {
    setButtonPopup(true);
  };

  return (
    <nav className="nav-container">
      <div className="logo-items-1">
        <h1>anX</h1>
      </div>
      <div className="end-items-3">
        <div className="home-items-1">Home</div>
        <div className="category-items-2">
          <button className="btn-category">Category</button>
        </div>
        <div className="search-items-4">
          <SearchLogo onClick={handleClick} />
          <SearchPopup
            trigger={buttonPopup}
            setTrigger={setButtonPopup}
            setSearchTrigger={setSearch}
            setSearch={search}
          ></SearchPopup>
        </div>
        <div className="cart-items-1">
          <CartLogo buttonPopuptrigger={buttonPopup} />
        </div>
        <div className="login-items-2">Login</div>
        <div className="signup-items-3">Sign up</div>
      </div>
    </nav>
  );
}

export default Header;
