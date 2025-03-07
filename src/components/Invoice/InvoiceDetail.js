import React from 'react';
import InvoiceItem from './InvoiceItem';
import PdfGenerator from './PdfGenerator';
import './InvoiceDetail.css';

function InvoiceDetail({ invoice, onClose }) {
  // Calculation logic for totals
  const totalWithoutTax = invoice.items.reduce((sum, item) => sum + item.dealPrice * item.quantity, 0);
  const totalTax = invoice.items.reduce((sum, item) => sum + item.tax, 0);
  const totalWithTax = totalWithoutTax + totalTax;

  return (
    <div className="invoice-detail">
      <button onClick={onClose}>Close</button>
      <h3>Invoice Details - Order ID: {invoice.orderID}</h3>
      <p>Store: {invoice.storeName}</p>
      <p>Date: {invoice.date}</p>
      <div className="invoice-items">
        {invoice.items.map(item => (
          <InvoiceItem key={item.id} item={item} />
        ))}
      </div>
      <div className="invoice-summary">
        <p>Total (without tax): ${totalWithoutTax.toFixed(2)}</p>
        <p>Tax: ${totalTax.toFixed(2)}</p>
        <p>Grand Total: ${totalWithTax.toFixed(2)}</p>
      </div>
      <PdfGenerator invoice={invoice} />
    </div>
  );
}

export default InvoiceDetail;
