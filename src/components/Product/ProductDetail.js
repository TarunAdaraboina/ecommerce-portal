import React from 'react';
import './ProductDetail.css';

function ProductDetail({ product, onClose }) {
  // Function to generate star icons based on rating (max 5 stars)
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar ? '☆' : ''}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img src={product.image} alt={product.title} className="product-detail-image" />
        <div className="product-detail-content">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-description">{product.description}</p>
          <p className="product-detail-price">
            <strong>Price:</strong> ${product.price}
          </p>
          <p className="product-detail-category">
            <strong>Category:</strong> {product.category}
          </p>
          {product.rating && (
            <p className="product-detail-rating">
              <strong>Rating:</strong> {product.rating.rate} {renderStars(product.rating.rate)}
              <span className="rating-count"> ({product.rating.count} reviews)</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
