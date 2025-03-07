import React from 'react';
import './StoreFilter.css';

function StoreFilter({ storeNames = [], selectedStore, setSelectedStore }) {
  if (!Array.isArray(storeNames)) {
    console.error('storeNames is not an array:', storeNames);
    return null; // Or render a fallback UI
  }

  return (
    <div className="store-filter">
      <label htmlFor="store-select">Filter by Store:</label>
      <select
        id="store-select"
        value={selectedStore}
        onChange={(e) => setSelectedStore(e.target.value)}
      >
        <option value="">All Stores</option>
        {storeNames.map((store, index) => (
          <option key={index} value={store}>
            {store}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StoreFilter;
