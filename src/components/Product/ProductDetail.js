import React from 'react';
import './ProductDetail.css';

function ProductDetail({ product, onClose }) {
  // Function to generate star icons based on rating (max 5 stars)
  const renderStars = (rating) => {
    if (!rating) return '☆☆☆☆☆ (No ratings)';
    
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar ? '½' : ''}
        {'☆'.repeat(emptyStars)}
        {` (${rating.toFixed(1)})`}
      </>
    );
  };

  return (
    <div className="product-detail-overlay">
      <div className="product-detail-container">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <img 
          src={product.image || 'https://via.placeholder.com/150'} 
          alt={product.title} 
          className="product-detail-image"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = 'https://via.placeholder.com/150'
          }}
        />
        <div className="product-detail-content">
          <h2 className="product-detail-title">{product.title}</h2>
          <p className="product-detail-description">{product.description}</p>
          
          <div className="detail-section">
            <span className="detail-label">Price:</span>
            <span className="detail-value">${product.price?.toFixed(2) || 'N/A'}</span>
          </div>

          <div className="detail-section">
            <span className="detail-label">Store:</span>
            <span className="detail-value">{product.storeName || 'Unknown Store'}</span>
          </div>

          {product.rating && (
            <div className="detail-section">
              <span className="detail-label">Rating:</span>
              <span className="detail-rating">
                {renderStars(product.rating?.rate)}
                <span className="rating-count"> ({product.rating?.count || 0} reviews)</span>
              </span>
            </div>
          )}

          {product.category && (
            <div className="detail-section">
              <span className="detail-label">Category:</span>
              <span className="detail-value">{product.category}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;