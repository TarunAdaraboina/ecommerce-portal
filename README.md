Ecommerce Portal

Project Overview

The Ecommerce Portal is a React-based web application designed for store owners to efficiently manage invoices and product information. The portal provides essential functionalities such as invoice generation, product management, filtering, and searching. Additionally, it includes user authentication and authorization to ensure secure data access. This project offers hands-on experience in React development, front-end architecture, and web development workflows.

Features

Invoice Generation

Invoice List: Displays a list of all invoices.

Invoice Details: Show detailed information for each invoice.

Calculation Logic: Automatically calculates item totals, tax, and grand totals.

Date-wise Filtering: Allows filtering of invoices by selected date ranges.

PDF Generation: Generates PDF versions of invoices using jsPDF and react-to-pdf.

Product Management

Product List: Displays all available products.

Product Details: Provides detailed information about each product.

Product Form: Enables store owners to add and edit products.

Filtering and Searching: Filters products by store and allows searching by product name.

CRUD Operations: Supports Create, Read, Update, and Delete operations for products.

Authentication and Authorization

Login System: Secure login using store credentials.

Data Access: Restricts access to store-specific data post-login.

Styling

Styled using Material UI and custom CSS for a sleek and responsive design.

Implements responsive design principles to ensure seamless use on mobile and desktop devices.

Technologies Used

React.js for building user interfaces.

Axios for API requests.

Material UI for component styling.

jsPDF and react-to-pdf for PDF generation.

React Router for navigation.

Vercel for deployment.

Project Setup Instructions

Clone the Repository:

git clone https://github.com/TarunAdaraboina/ecommerce-portal.git

Navigate to the Project Directory:

cd ecommerce-portal

Install Dependencies:

npm install

Start the Development Server:

npm start

Build the Application for Production:

npm run build

Deployment

The project is deployed using Vercel. You can access the live version of the application here:

GitHub Repository: View on GitHub

Live Demo: View on Vercel

Folder Structure

/ecommerce-portal
│-- /public
│-- /src
│   │-- /components
│   │   │-- /Invoice
│   │   │-- /Product
│   │-- /pages
│   │-- /utils
│   │-- App.js
│   │-- index.js
│-- .gitignore
│-- package.json
│-- README.md

Potential Improvements

Implement advanced filtering options (e.g., category-based filtering for products).

Enhance user authentication by integrating JWT tokens.

Add admin roles to provide different access levels.

Improve UI with animations and transitions.