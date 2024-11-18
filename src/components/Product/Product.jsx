/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Product = ({ id, title, price, description, image, userId }) => {
  console.log("Product", { id, title, price, description, image, userId });

  return (
    <div className="product-card">
      {/* If image exists, render it */}
      {image && <img src={image} alt={title} />}
      <h3>{id}</h3>
      <p>{title}</p>
      <span>${userId}</span>
      <div>____________________________</div>
    </div>
  );
};

// Define the prop types for the Product component
Product.propTypes = {
  id: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string, // Image is optional (no "isRequired" here)
};

export default Product;
