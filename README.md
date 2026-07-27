# 👟 ShoeHub - Full Stack E-Commerce Platform

![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express.js](https://img.shields.io/badge/Framework-Express.js-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Mongoose](https://img.shields.io/badge/ODM-Mongoose-red)
![Bootstrap](https://img.shields.io/badge/Frontend-Bootstrap-purple)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-Learning-blue)

ShoeHub is a **full-stack e-commerce platform** built for buying and selling footwear. The application provides a seamless shopping experience for customers while offering a dedicated seller dashboard for managing products, orders, customers, and business analytics.

The project is developed using **Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, JWT Authentication, Nodemailer, and Winston Logger**. It follows the **MVC Architecture** and **Repository Pattern** to keep the codebase modular, scalable, and maintainable.

---

# 🚀 Features

## 👤 User Module

### Authentication

* User Registration
* User Login
* JWT Authentication
* Cookie-based Authentication
* Secure Password Hashing (bcrypt)
* Logout

### Password Management

* Forgot Password
* Password Reset via Email
* Secure Reset Tokens
* Token Expiry Validation

### Shopping Features

* Browse Products
* Product Details
* Product Search
* Product Filtering
* Add to Cart
* Update Cart Quantity
* Remove Cart Items
* Wishlist Management

### Checkout & Orders

* Checkout Page
* Shipping Address Management
* Place Orders
* Order History
* Order Details
* Order Confirmation Email
* Shipping Notification Email

### User Profile

* View Profile
* Edit Profile
* Upload Profile Image

### Contact & Feedback

* Contact Form
* Customer Feedback
* Feedback Thank You Email

---

# 🏪 Seller Module

A dedicated seller dashboard is available for store management.

## Seller Authentication

* Seller Registration
* Seller Login
* Seller Logout
* JWT Protected Routes
* Forgot Password
* Password Reset via Email

## Dashboard Analytics

Seller Dashboard displays:

* Total Users
* Total Products
* Total Orders
* Total Revenue
* Recent Orders
* Revenue Analytics using MongoDB Aggregation

## Product Management

Seller can:

* Add Products
* Upload Product Images
* Edit Products
* Delete Products
* Update Product Stock
* Manage Inventory

## Order Management

Seller can:

* View Orders
* View Order Details
* Update Order Status
* Manage Shipping Process

## Seller Profile

* View Seller Profile
* Update Seller Details
* Store Information Management

---

# 📊 Analytics

MongoDB Aggregation Pipelines are used for generating dashboard statistics.

Analytics include:

* Total Revenue
* Total Orders
* Total Products
* Total Users
* Recent Orders

---

# 📧 Email Services

Email notifications are implemented using **Nodemailer**.

Available emails:

* Welcome Email
* Password Reset Email
* Order Confirmation Email
* Order Shipped Email
* Feedback Thank You Email

---

# 🏗️ Architecture

The project follows the **MVC (Model-View-Controller)** Architecture along with the **Repository Pattern**.

### Controller

* Handles incoming requests
* Processes business logic
* Returns responses

### Repository

* Handles all database operations
* Uses Mongoose models
* Keeps controllers clean

### Models

* Mongoose Schemas
* Data Validation
* Collection Structure

### Middlewares

* JWT Authentication
* Seller Authentication
* File Upload
* Validation
* Error Handling

---

# 🛠️ Technologies Used

## Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6)
* EJS

## Backend

* Node.js
* Express.js
* REST APIs
* MVC Architecture
* Repository Pattern

## Database

* MongoDB
* Mongoose ODM

## Authentication

* JWT
* Cookies
* bcrypt

## Packages

* mongoose
* express
* bcrypt
* jsonwebtoken
* multer
* nodemailer
* dotenv
* express-ejs-layouts
* cookie-parser
* cors
* express-validator
* winston

---

# 🗄️ Database Features

* MongoDB Collections
* Mongoose Schemas
* Schema Validation
* Population using `populate()`
* Aggregation Pipelines
* Atomic Updates
* Efficient CRUD Operations

---

# 📋 Logging

Application logging is implemented using **Winston Logger**.

Logs include:

* User Login
* User Registration
* Seller Activities
* Product Operations
* Cart Operations
* Order Operations
* Server Errors
* Database Errors

---

# ✅ Validation

Input validation is implemented using middleware.

Validation includes:

* User Registration
* Login
* Product Creation
* Checkout
* Password Reset
* Contact Forms

---

# ⚠️ Error Handling

Centralized error handling is implemented using a custom `ApplicationError` class.

Features include:

* Custom HTTP Status Codes
* Consistent Error Responses
* Graceful Database Error Handling
* Global Error Middleware

---

# 📂 Project Structure

```text
ShoeHub
│
├── src
│   ├── config
│   │   ├── db.js
│   │   ├── logger.js
│   │   ├── mailer.js
│   │   └── emailService.js
│   │
│   ├── errorFile
│   │   └── applicationError.js
│   │
│   ├── features
│   │   ├── users
│   │   ├── seller
│   │   ├── product
│   │   ├── productDetails
│   │   ├── cart
│   │   ├── wishlist
│   │   ├── order
│   │   ├── contact
│   │   └── profile
│   │
│   ├── middlewares
│   │   ├── jwtAuthMiddleware.js
│   │   ├── sellerAuthMiddleware.js
│   │   ├── validationMiddleware.js
│   │   ├── fileUploadMiddleware.js
│   │   └── errorHandler.js
│   │
│   ├── views
│   ├── public
│   ├── app.js
│   └── server.js
│
├── uploads
├── swagger.json
├── package.json
├── .env
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Kashish-web09/ShoeHub.git
```

## Navigate to Project

```bash
cd ShoeHub
```

## Install Dependencies

```bash
npm install
```

---

# 🔐 Environment Variables

Create a `.env` file in the root directory.

```env
PORT=4090

MONGO_URL=your_mongodb_connection_string

JWT_SECRETKEY=your_secret_key

EMAIL=your_email@gmail.com

EMAIL_PASSWORD=your_email_password
```

---

# ▶️ Run the Application

```bash
npm start
```

Server runs on:

```text
http://localhost:4090
```

---

# 📑 API Documentation

Swagger documentation is included.

Example endpoint:

```text
/api-docs
```

---

# 🌐 Application Routes

## User

```text
/api/users
```

Features:

* Register
* Login
* Forgot Password
* Reset Password
* Profile

---

## Products

```text
/api/products
```

Features:

* View Products
* Search Products
* Filter Products
* Product Details

---

## Cart

```text
/api/cart
```

Features:

* Add Item
* Increase Quantity
* Decrease Quantity
* Remove Item

---

## Wishlist

```text
/api/wishlist
```

Features:

* Add Product
* Remove Product
* View Wishlist

---

## Orders

```text
/api/orders
```

Features:

* Checkout
* Place Order
* Order History
* Order Details

---

## Seller

```text
/api/seller
```

Features:

* Dashboard
* Product Management
* Order Management
* Seller Profile

---

# 🔒 Security Features

* JWT Authentication
* bcrypt Password Hashing
* Cookie-based Authentication
* Protected Routes
* Role-Based Authorization
* Environment Variables
* Request Validation
* Secure Password Reset Tokens

---

# 📤 File Uploads

File uploads are handled using **Multer**.

Used for:

* Product Images
* User Profile Images
* Seller Profile Images

Files are stored inside:

```text
uploads/
```

---

# 🗂️ Database Collections

```text
users
sellerAcc
products
cartItems
orders
wishlist
feedback
contact
```

---

# ⭐ Project Highlights

* Full Stack E-Commerce Platform
* MVC Architecture
* Repository Pattern
* REST API Development
* MongoDB Aggregation Pipeline
* Mongoose ODM
* JWT Authentication
* Seller Dashboard
* Revenue Analytics
* Winston Logging
* Nodemailer Integration
* Swagger API Documentation
* Responsive Bootstrap UI
* Image Upload with Multer

---

# 🚀 Future Improvements

* Online Payment Gateway Integration
* Product Reviews & Ratings
* Admin Dashboard
* Coupons & Discounts
* Product Recommendation System
* Sales Reports & Charts
* Cloud Deployment (Render/AWS)
* Real-Time Order Tracking

---

# 👨‍💻 Developer

**Kashish Narang**

Full Stack Developer

GitHub: **https://github.com/Kashish-web09**

---

# 📄 License

This project is developed for **learning, portfolio, and educational purposes**.
