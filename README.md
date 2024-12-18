# Swensen's Clone Web Application
## Overview
This project is a Full Stack Web Application simulating Swensen's delivery and admin system. The project involves creating a responsive and visually accurate replica of the Swensen's website, with additional functionality for managing user accounts and products.

The application supports:

 - Frontend: Home, Login, Register, and Admin pages.
 - Backend: User account handling and product management, including categories and images.
 - Responsive Design: Optimized for mobile, tablet, and desktop devices.

## Features
### Frontend
 - Home Page: Displays promotional items and categorized menus with a banner.
 - Login Page: Users can log in to access personalized content.
 - Register Page: Allows users to create a new account.
 - Admin Page: Enables product and category management, including the ability to add, edit, and view products.
 - Responsive Design: All pages are mobile, tablet, and desktop-friendly.
### Backend
 - User Management: Handles user registration and login.
 - Product Management:
    -Add new products with images and categories.
    -Edit and delete existing products.
    -Fetch products by category.
 - File Upload: Upload and store images for products securely.
 - Database Integration: Manages users, products, and categories.

## Tech Stack

### Frontend
 - React (Next.js 13): For building a dynamic and responsive UI.
 - Tailwind CSS: For styling the UI.

### Backend
 - NestJS: A robust framework for handling API requests.
 - TypeORM: For interacting with the database.
 - Multer: For handling file uploads.

### Database
 - PostgreSQL: For storing user, product, and category data.

## Setup Instructions

### Prerequisites
 - Node.js (version 16+ recommended)
 - PostgreSQL
 - npm

### Steps
### Backend
  1. Navigate to the backend folder.
```bash
cd backend
```
  2. Install dependencies.
```bash
npm install
```
  3. Set up the database.
   - Create a PostgreSQL database.
   - Update the database configuration in .env.

  4. Start the server.
```bash
npm run start
```
Backend will run at http://localhost:4000.

### Frontend
  1. Navigate to the frontend folder.
```bash
cd frontend
```
  2. Install dependencies.
```bash
npm install
```
  3. Start the development server.
```bash
npm run den
```
Frontend will run at http://localhost:3000.

## Key Functionalities
### Frontend
  - User Authentication: Secure login and registration system.
  - Admin Panel: Manage products with real-time feedback.
### Backend
- Product API:
   -GET /products: Fetch all products.
   -POST /products/create: Add new products.
   -PUT /products/update/:id: Update product details.
- Category API: Supports filtering products by category.

## How to Use
 1. Register a new account from the Register Page.
 2. Log in using the registered account.
 3. Browse products and categories on the Home Page.
 4. Access the Admin Page to manage products (Admin accounts only).
