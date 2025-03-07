import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductDetail from './ProductDetail'
import SearchBar from '../Filters/SearchBar';
import StoreFilter from '../Filters/StoreFilter';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedStore, setSelectedStore] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productsWithStore = data.map(product => ({
          ...product,
          storeName: product.storeName || 'Unknown Store'
        }));
        setProducts(productsWithStore);
        setFilteredProducts(productsWithStore);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    let filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedStore) {
      filtered = filtered.filter((product) => product.storeName === selectedStore);
    }

    setFilteredProducts(filtered);
  }, [searchTerm, selectedStore, products]);

  const storeNames = [...new Set(products.map((product) => product.storeName))];

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, newProduct]);
  };

  return (
    <div className="product-layout-container">
      <ProductForm onAddProduct={handleAddProduct} />
      
      <div className="product-list">
        <h2 className="product-list__title">Products</h2>
        <div className="product-list__filters">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <StoreFilter storeNames={storeNames} selectedStore={selectedStore} setSelectedStore={setSelectedStore} />
        </div>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="product-item"
              onClick={() => setSelectedProduct(product)}
            >
              <img src={product.image} alt={product.title} className="product-item__image" />
              <h3 className="product-item__title">{product.title}</h3>
              <p className="product-item__store">{product.storeName}</p>
            </div>
          ))}
        </div>
        {selectedProduct && (
          <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>
    </div>
  );
}

export default ProductList;