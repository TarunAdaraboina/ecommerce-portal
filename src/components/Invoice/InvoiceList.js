import React, { useState, useEffect } from 'react';
import InvoiceDetail from './InvoiceDetail';
import './InvoiceList.css';

function InvoiceList() {
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Replace with your API endpoint or local data source
    fetch('https://fakestoreapi.com/invoices')
      .then(res => res.json())
      .then(data => {
        setInvoices(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching invoices:', error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading invoices...</div>;
  if (!invoices || invoices.length === 0) return <div>No invoices available.</div>;

  return (
    <div className="invoice-list">
      <h2>Invoice List</h2>
      <ul>
        {invoices.map(invoice => (
          <li key={invoice.orderID} onClick={() => setSelectedInvoice(invoice)}>
            Order ID: {invoice.orderID} - Store: {invoice.storeName}
          </li>
        ))}
      </ul>
      {selectedInvoice && (
        <InvoiceDetail invoice={selectedInvoice} onClose={() => setSelectedInvoice(null)} />
      )}
    </div>
  );
}

export default InvoiceList;
