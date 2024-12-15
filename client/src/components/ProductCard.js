import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product._id}`);
  };

  return (
    <div className="product-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <img src={product.imageUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <p>
        {product.salePrice ? (
          <>
            <span className="original-price">${product.price}</span>
            <span className="sale-price">${product.salePrice}</span>
          </>
        ) : (
          <span className="price">${product.price}</span>
        )}
      </p>
    </div>
  );
};

export default ProductCard;
