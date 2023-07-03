import React from 'react';
import PropTypes from 'prop-types';
import {FaStar} from 'react-icons/fa';
import './ProductComponent';

const ProductCard = ({ product }) => {
  const { title, brand, category, stock, rating, thumbnail, price, discountPercentage } = product;

  const lowStock = stock < 20;

  return (
    <div className={`product-card ${lowStock ? 'low-stock' : ''}`}>
      <div className="product-info">
        <h2>{title}</h2>
        <p>{brand}</p>
        <p>{category}</p>
        <p>Price: ${price}</p>
        <p className="stock">{stock} in stock</p>
        <p>Discount Percentage: {discountPercentage}</p>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color={i + 1 <= rating ? '#ffc107' : '#e4e5e9'} />
          ))}
        </div>
      </div>
      <img src={thumbnail} alt={title} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    stock: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    discountPercentage: PropTypes.number.isRequired
  }).isRequired
};

export default ProductCard;