import React, { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";

interface NavProps {
  cartCount: number;
  onCartClick: () => void;
}

const Nav: React.FC<NavProps> = ({ cartCount, onCartClick }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav>
      <a href="#" className="nav-logo">
        VOLTEX<span>electronics &amp; tech</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">Phones</a>
        </li>
        <li>
          <a href="#">Audio</a>
        </li>
        <li>
          <a href="#">Laptops</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
        <li>
          <a href="#">Deals</a>
        </li>
      </ul>
      <div className="nav-actions">
        <div className={`nav-search-wrapper ${searchOpen ? "open" : ""}`}>
          <input
            type="text"
            className="nav-search"
            placeholder="Search products…"
            onBlur={() => setSearchOpen(false)}
            autoFocus={searchOpen}
          />
        </div>
        <button
          className="btn-search"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Search"
        >
          {searchOpen ? <MdClose size={20} /> : <MdSearch size={20} />}
        </button>
        <button className="btn-cart" onClick={onCartClick}>
          Cart ({cartCount})
        </button>
      </div>
    </nav>
  );
};

export default Nav;
