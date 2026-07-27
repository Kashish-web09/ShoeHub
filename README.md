# 👟 ShoeHub - Full Stack E-Commerce Platform

![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![Express.js](https://img.shields.io/badge/Framework-Express.js-lightgrey)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Mongoose](https://img.shields.io/badge/ODM-Mongoose-red)
![Bootstrap](https://img.shields.io/badge/Frontend-Bootstrap-purple)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

ShoeHub is a **full-stack footwear e-commerce web application** built using **Node.js, Express.js, MongoDB, Mongoose, EJS, and Bootstrap**. The application allows customers to browse products, manage their shopping cart and wishlist, place orders, and manage their profiles. It also includes a dedicated seller panel for managing products, customer orders, and store operations.

The project follows the **MVC (Model-View-Controller)** architecture and **Repository Pattern**, making the code modular, scalable, and easy to maintain.

---

# 🚀 Features

## 👤 User Module

### Authentication

- User Registration
- User Login
- JWT Authentication
- Cookie-Based Authentication
- Secure Password Hashing using bcrypt
- Logout

### Password Management

- Forgot Password
- Password Reset via Email
- Secure Reset Token
- Token Expiry Validation

### Shopping

- Browse Products
- Product Details
- Product Search
- Product Filtering
- Add Products to Cart
- Increase / Decrease Quantity
- Remove Products from Cart
- Wishlist Management

### Orders

- Checkout
- Place Orders
- View Order History
- View Order Details

### Profile

- View User Profile
- Update Profile
- Upload Profile Image

### Contact & Feedback

- Contact Support
- Submit Feedback

---

# 🏪 Seller Module

## Authentication

- Seller Registration
- Seller Login
- JWT Protected Routes
- Forgot Password
- Reset Password

## Dashboard

Seller Dashboard displays:

- Total Products
- Total Orders
- Total Customers
- Total Revenue
- Recent Orders

## Product Management

Seller can:

- Add Products
- Edit Products
- Delete Products
- Upload Product Images
- Manage Product Stock

## Order Management

Seller can:

- View Customer Orders
- View Order Details
- Update Order Status

## Seller Profile

- View Seller Profile
- Update Seller Details

---

# 📧 Email Services

Email functionality is implemented using **Nodemailer**.

Implemented emails:

- Welcome Email
- Password Reset Email
- Order Confirmation Email
- Shipping Notification Email
- Feedback Thank You Email

---

# 🏗️ Architecture

The project follows the **MVC (Model-View-Controller)** Architecture along with the **Repository Pattern**.

### Controller

- Handles HTTP Requests
- Business Logic
- Returns Responses

### Repository

- Handles Database Operations
- Uses Mongoose Models
- Keeps Controllers Clean

### Models

- MongoDB Schemas
- Data Validation

### Middlewares

- JWT Authentication
- Seller Authentication
- File Upload Middleware
- Validation Middleware
- Error Handling

---

# 🛠️ Tech Stack

## Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript (ES6)
- EJS Template Engine

## Backend

- Node.js
- Express.js
- REST APIs
- MVC Architecture
- Repository Pattern

## Database

- MongoDB
- Mongoose ODM

## Authentication

- JWT
- Cookies
- bcrypt

---

# 📦 Packages Used

- express
- mongoose
- bcrypt
- jsonwebtoken
- multer
- nodemailer
- dotenv
- cookie-parser
- express-ejs-layouts
- cors
- winston

---

# 📋 Logging

Application logging is implemented using **Winston Logger**.

Logs include:

- User Login
- User Registration
- Seller Activities
- Product Operations
- Cart Operations
- Order Operations
- Database Errors
- Server Errors

---

# ⚠️ Error Handling

Centralized error handling is implemented using a custom `ApplicationError` class.

Features include:

- Consistent Error Responses
- Custom HTTP Status Codes
- Database Error Handling
- Global Error Middleware

---

# 📂 Project Structure

```text
ShoeHub
│
├── logs
├── uploads
│
├── src
│   │
│   ├── config
│   │   ├── emailService.js
│   │   ├── logger.js
│   │   ├── mailer.js
│   │   ├── mongoDb.js
│   │   └── mongooseConfig.js
│   │
│   ├── errorFile
│   │   └── applicationError.js
│   │
│   ├── features
│   │   ├── cart
│   │   ├── contact
│   │   ├── order
│   │   ├── product
│   │   ├── productDetails
│   │   ├── profile
│   │   ├── seller
│   │   │   ├── feedback
│   │   │   ├── order
│   │   │   ├── product
│   │   │   ├── profile
│   │   │   └── user
│   │   ├── users
│   │   └── wishlist
│   │
│   ├── middlewares
│   │   ├── fileUploadsMiddleware.js
│   │   ├── jwtAuthMiddleware.js
│   │   ├── sellerAuthMiddleware.js
│   │   └── validationMiddleware.js
│   │
│   ├── public
│   │   ├── css
│   │   ├── images
│   │   └── js
│   │
│   ├── views
│   │   ├── layouts
│   │   ├── partials
│   │   ├── seller
│   │   └── *.ejs
│   │
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

## Navigate into Project

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

EMAIL=your_email@gmail.com

EMAIL_PASSWORD=your_email_password
```

---

# ▶️ Run the Application

```bash
npm start
```

The application will run at:

```
http://localhost:4090
```

---

# 📑 API Documentation

Swagger documentation is included for testing APIs.

```
/api-docs
```

---

# 🌐 Main Routes

## User

```
/api/users
```

- Register
- Login
- Forgot Password
- Reset Password

---

## Products

```
/api/products
```

- View Products
- Product Details
- Search Products
- Filter Products

---

## Cart

```
/api/cart
```

- Add Item
- Update Quantity
- Remove Item

---

## Wishlist

```
/api/wishlist
```

- Add Product
- Remove Product

---

## Orders

```
/api/orders
```

- Checkout
- Place Order
- Order History

---

## Seller

```
/api/seller
```

- Seller Dashboard
- Product Management
- Order Management
- Profile

---

# 🔒 Security Features

- JWT Authentication
- Password Hashing with bcrypt
- Cookie-Based Authentication
- Protected Routes
- Role-Based Authorization
- Environment Variables
- Input Validation

---

# 📤 File Uploads

File uploads are handled using **Multer**.

Used for:

- Product Images
- User Profile Images
- Seller Profile Images

Uploaded files are stored in:

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

- Full Stack E-Commerce Platform
- MVC Architecture
- Repository Pattern
- REST API Development
- MongoDB with Mongoose
- JWT Authentication
- Seller Dashboard
- Shopping Cart & Wishlist
- Order Management
- Winston Logger
- Nodemailer Integration
- Swagger API Documentation
- Responsive Bootstrap UI

---

# 🚀 Future Improvements

- Online Payment Gateway
- Product Reviews & Ratings
- Admin Dashboard
- Sales Analytics
- Coupons & Discounts
- Cloud Deployment

---

# 👨‍💻 Developer

**Kashish Narang**

Full Stack Developer

**GitHub:** https://github.com/Kashish-web09

---

# 📄 License

This project is developed for **learning, portfolio, and educational purposes**.
