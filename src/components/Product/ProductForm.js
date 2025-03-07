import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm({ onAddProduct }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    storeName: 'Default Store',
    image: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      ...formData,
      price: parseFloat(formData.price),
      image: formData.image || 'https://via.placeholder.com/150',
      rating: { rate: 0, count: 0 }
    };
    onAddProduct(newProduct);
    setFormData({
      title: '',
      description: '',
      price: '',
      storeName: 'Default Store',
      image: ''
    });
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <header className="form-header">
        <h3 className="form-title">Add New Product</h3>
        <div className="form-decoration"></div>
      </header>

      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="title">
            Product Title <span className="required">*</span>
          </label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">
            Price <span className="required">*</span>
          </label>
          <div className="input-group">
            <span className="currency">$</span>
            <input
              type="number"
              id="price"
              value={formData.price}
              onChange={handleChange}
              step="0.01"
              required
              className="form-input"
              placeholder="0.00"
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="form-textarea"
            rows="4"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            value={formData.image}
            onChange={handleChange}
            className="form-input"
            placeholder="https://example.com/image.jpg"
          />
        </div>

        <div className="form-group">
          <label htmlFor="storeName">
            Store <span className="required">*</span>
          </label>
          <div className="select-wrapper">
            <select
              id="storeName"
              value={formData.storeName}
              onChange={handleChange}
              className="form-select"
            >
              <option value="Default Store">Default Store</option>
              <option value="Premium Outlet">Premium Outlet</option>
              <option value="Online Store">Online Store</option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" className="form-button">
        <span className="button-text">Create Product</span>
        <span className="button-icon">→</span>
      </button>
    </form>
  );
}

export default ProductForm;