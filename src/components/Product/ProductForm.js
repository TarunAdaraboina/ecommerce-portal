// src/components/Product/ProductForm.js

import React, { useState } from 'react';
import './ProductForm.css';

function ProductForm({ onAddProduct }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [storeName, setStoreName] = useState('Default Store');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      title,
      description,
      price: parseFloat(price),
      storeName,
    };
    onAddProduct(newProduct);

    // Reset form fields
    setTitle('');
    setDescription('');
    setPrice('');
    setStoreName('Default Store');
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3 className="form-title">Add / Edit Product</h3>

      <div className="form-group">
        <label htmlFor="title" className="form-label">Product Title:</label>
        <input
          type="text"
          id="title"
          className="form-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">Description:</label>
        <textarea
          id="description"
          className="form-textarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="price" className="form-label">Price:</label>
        <input
          type="number"
          id="price"
          className="form-input"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="storeName" className="form-label">Store Name:</label>
        <input
          type="text"
          id="storeName"
          className="form-input"
          value={storeName}
          onChange={(e) => setStoreName(e.target.value)}
        />
      </div>

      <button type="submit" className="form-button">Submit</button>
    </form>
  );
}

export default ProductForm;
