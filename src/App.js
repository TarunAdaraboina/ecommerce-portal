import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import InvoiceList from './components/Invoice/InvoiceList';
import ProductList from './components/Product/ProductList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><Link to="/invoices" className="nav-link">Invoices</Link></li>
            <li className="nav-item"><Link to="/products" className="nav-link">Products</Link></li>
          </ul>
        </nav>
        <div className="content-container">
          <Routes>
            <Route path="/invoices" element={<InvoiceList />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/" element={<InvoiceList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
