import React from 'react';
import './InvoiceItem.css';

function InvoiceItem({ item }) {
  return (
    <div className="invoice-item">
      <p>Item: {item.name}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Regular Price: ${item.regularPrice}</p>
      <p>Deal Price: ${item.dealPrice}</p>
      <p>Item Total: ${(item.dealPrice * item.quantity).toFixed(2)}</p>
      <p>Tax: ${item.tax.toFixed(2)}</p>
    </div>
  );
}

export default InvoiceItem;
