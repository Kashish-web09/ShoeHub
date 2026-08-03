

# 👟 ShoeHub - Full Stack E-Commerce Platform

![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express.js](https://img.shields.io/badge/Framework-Express.js-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Mongoose](https://img.shields.io/badge/ODM-Mongoose-red)
![Bootstrap](https://img.shields.io/badge/Frontend-Bootstrap-purple)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

ShoeHub is a **full-stack footwear e-commerce web application** built using **Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, and JavaScript**.

The application provides a complete shopping experience where customers can browse products, manage their cart and wishlist, place orders, and manage their profiles. It also includes a dedicated seller panel for managing products, inventory, customer orders, and business operations.

The project follows the **MVC (Model-View-Controller)** architecture along with the **Repository Pattern**, making the application modular, scalable, and easy to maintain.

---

# 🚀 Features

## 👤 User Module

### Authentication

* User Registration
* User Login
* JWT Authentication
* Cookie-Based Authentication
* Password Encryption using bcrypt
* Logout

### Password Management

* Forgot Password
* Password Reset via Email
* Secure Reset Token
* Token Expiry Validation

### Shopping

* Browse Products
* Product Details
* Product Search
* Product Filtering
* Shopping Cart
* Wishlist
* Increase / Decrease Quantity
* Remove Cart Items

### Orders

* Checkout
* Place Orders
* Order History
* Order Details

### Profile

* View Profile
* Update Profile
* Upload Profile Picture

### Contact

* Contact Form
* Customer Feedback

---

# 🏪 Seller Module

## Authentication

* Seller Registration
* Seller Login
* JWT Protected Routes
* Forgot Password
* Password Reset

## Dashboard

Seller Dashboard provides:

* Total Products
* Total Orders
* Total Customers
* Total Revenue
* Recent Orders Overview

## Product Management

* Add Products
* Edit Products
* Delete Products
* Product Image Upload
* Stock Management

## Order Management

* View Orders
* Order Details
* Update Order Status

## Seller Profile

* View Profile
* Update Profile

---

# 📧 Email Services

Email functionality is implemented using **Nodemailer**.

Currently implemented emails include:

* Welcome Email
* Password Reset Email
* Order Confirmation Email
* Shipping Notification Email
* Feedback Thank You Email

> **Current Status**
>
> Email services are configured for **local development only** using SMTP credentials.
>
> **Production email providers** such as **Brevo**, **SendGrid**, or **AWS SES** will be integrated after deployment.

---

# 🏗️ Architecture

The project follows:

* MVC Architecture
* Repository Pattern

## Controller

* Handles HTTP Requests
* Business Logic
* Response Handling

## Repository

* Database Operations
* Mongoose Queries
* Data Abstraction Layer

## Models

* MongoDB Schemas
* Data Validation

## Middlewares

* JWT Authentication
* Seller Authentication
* Validation Middleware
* File Upload Middleware
* Error Handling Middleware

---

# 🛠️ Tech Stack

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
* Mongoose

## Authentication

* JWT
* Cookies
* bcrypt

---

# 📦 Packages Used

* express
* mongoose
* bcrypt
* jsonwebtoken
* multer
* nodemailer
* dotenv
* cookie-parser
* express-ejs-layouts
* express-validator
* cors
* winston

---

# 📋 Logging

Logging is implemented using **Winston Logger**.

Logs include:

* User Login
* User Registration
* Seller Activities
* Product Operations
* Cart Operations
* Order Operations
* Database Errors
* Server Errors

---

# ⚠️ Error Handling

Centralized error handling is implemented using a custom **ApplicationError** class.

Features:

* Global Error Middleware
* Consistent Error Responses
* Custom HTTP Status Codes
* Database Error Handling
* Validation Errors

---

# 📂 Project Structure

```text
ShoeHub
│
├── logs
├── uploads
│
├── src
│   ├── config
│   ├── errorFile
│   ├── features
│   │   ├── cart
│   │   ├── contact
│   │   ├── order
│   │   ├── product
│   │   ├── productDetails
│   │   ├── profile
│   │   ├── seller
│   │   ├── users
│   │   └── wishlist
│   │
│   ├── middleware
│   ├── public
│   ├── views
│   ├── app.js
│   └── server.js
│
├── swagger.json
├── package.json
├── README.md
└── .env
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/Kashish-web09/ShoeHub
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

Create a `.env` file in the project root.

```env
PORT=4090

MONGO_URL=your_mongodb_connection_string

JWT_SECRETKEY=your_secret_key

SENDER_EMAIL=your_email@gmail.com

SENDER_PASSWORD=your_email_app_password

BASE_URL=http://localhost:4090
```

---

# ▶️ Run the Project

```bash
npm start
```

Application URL:

```
http://localhost:4090
```
Live URL:
```
https://shoehub-ecommerce.up.railway.app/
---

# 📑 API Documentation

Swagger documentation is available at:

```
/api-docs
```

---

# 🌐 Main Routes

## Users

```
/api/users
```

* Register
* Login
* Forgot Password
* Reset Password

## Products

```
/api/products
```

* Product Listing
* Product Details
* Search
* Filter

## Cart

```
/api/cart
```

* Add Item
* Update Quantity
* Remove Item

## Wishlist

```
/api/wishlist
```

* Add Product
* Remove Product

## Orders

```
/api/orders
```

* Checkout
* Place Order
* Order History

## Seller

```
/api/seller
```

* Dashboard
* Product Management
* Order Management
* Profile

---

# 🔒 Security Features

* JWT Authentication
* Cookie-Based Authentication
* Password Hashing (bcrypt)
* Protected Routes
* Role-Based Authorization
* Environment Variables
* Input Validation
* Secure Password Reset Tokens

---

# 📤 File Uploads

File uploads are handled using **Multer**.

Supported uploads:

* Product Images
* User Profile Images
* Seller Profile Images

Storage Location:

```
uploads/
```

---

# 🗄️ Database Collections

```
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
* MongoDB with Mongoose
* JWT Authentication
* Seller Dashboard
* Shopping Cart & Wishlist
* Order Management
* Password Reset via Email
* Winston Logger
* Multer File Uploads
* Nodemailer Integration (Local Development)
* Swagger API Documentation
* Responsive Bootstrap UI

---

# ⚠️ Current Project Status

This project is fully functional for **local development**.

### Completed

* ✅ User Authentication
* ✅ Seller Authentication
* ✅ Product Management
* ✅ Shopping Cart
* ✅ Wishlist
* ✅ Checkout & Order Management
* ✅ Email Notifications (Local SMTP)
* ✅ Swagger API Documentation
* ✅ File Uploads
* ✅ Logging with Winston

### Planned Production Features

* 🔄 Live Email Service Integration (Brevo / SendGrid / AWS SES)
* 🔄 Razorpay Payment Gateway
* 🔄 Product Reviews & Ratings
* 🔄 Admin Dashboard
* 🔄 Sales Analytics
* 🔄 Coupons & Discounts
* 🔄 Order Tracking
* 🔄 Cloud Storage (Cloudinary / AWS S3)
* 🔄 Cloud Deployment

---

# 🚀 Future Improvements

* 💳 Razorpay Payment Gateway Integration
* ⭐ Product Reviews & Ratings
* 📧 Production Email Service Integration
* ☁️ Cloudinary Image Storage
* 📊 Admin Dashboard
* 📈 Sales Analytics
* 🎟️ Coupon & Discount System
* 🚚 Order Tracking
* ❤️ Product Recommendations
* 🔍 Advanced Search & Filtering
* 🚀 Cloud Deployment

---

# 👨‍💻 Developer

**Kashish Narang**

Full Stack Developer

**GitHub:** https://github.com/Kashish-web09

---

# 📄 License

This project is developed for **learning, portfolio, and educational purposes**.
