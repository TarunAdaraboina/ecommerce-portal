import React, { useRef } from 'react';
import ReactToPdf from 'react-to-pdf';
import './PdfGenerator.css';

function PdfGenerator({ invoice }) {
  const ref = useRef();

  return (
    <div className="pdf-generator">
      <div ref={ref} style={{ padding: '20px', backgroundColor: '#fff' }}>
        <h3>Invoice PDF</h3>
        <p>Order ID: {invoice.orderID}</p>
        <p>Store: {invoice.storeName}</p>
        <p>Date: {invoice.date}</p>
        {invoice.items.map(item => (
          <div key={item.id}>
            <p>{item.name} - {item.quantity} x ${item.dealPrice}</p>
          </div>
        ))}
      </div>
      <ReactToPdf targetRef={ref} filename={`invoice-${invoice.orderID}.pdf`}>
        {({ toPdf }) => (
          <button onClick={toPdf}>Generate PDF</button>
        )}
      </ReactToPdf>
    </div>
  );
}

export default PdfGenerator;
