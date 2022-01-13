import React, { useState } from 'react';
import './Header.css';
import LikeButton from './LikeButton';
import LikedProductsDropdown from './LikedProductsDropdown';

interface HeaderProps {
  likedProducts: string[];
}

const Header = ({ likedProducts }: HeaderProps) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  return (
    <div className="header">
      <div>
        <div className="header-like-container">
          <LikeButton onClick={() => setIsDropdownActive(!isDropdownActive)} />
          <p
            className="liked-products-count"
            data-testid="liked-products-count"
          >
            {likedProducts.length}
          </p>
        </div>
        {isDropdownActive && (
          <LikedProductsDropdown
            likedProducts={likedProducts}
            setIsDropdownActive={setIsDropdownActive}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
