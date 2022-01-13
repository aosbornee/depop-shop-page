import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LikeButton.css';
import React from 'react';

// will take in an optional function which will show the number of likes on the products dropdown

interface LikeButtonProps {
  onClick?: any;
  isProductLiked?: boolean | null;
}

const LikeButton = ({ onClick, isProductLiked }: LikeButtonProps) => {
  return (
    <button className="like-button btn" onClick={onClick} type="button">
      <FontAwesomeIcon
        className={isProductLiked ? 'liked' : ''}
        icon={faThumbsUp}
      />
    </button>
  );
};

export default LikeButton;

LikeButton.defaultProps = {
  isProductLiked: null,
  onClick: null,
};
