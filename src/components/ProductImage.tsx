import React from 'react';

interface ProductImageProps {
  imageUrl: string;
  imageName: string;
}

const ProductImage = ({ imageUrl, imageName }: ProductImageProps) => {
  return <img src={imageUrl} alt={imageName} />;
};

export default ProductImage;
