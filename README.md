# 👟 ShoeHub - Full Stack E-Commerce Website

![ShoeHub](https://img.shields.io/badge/Project-E--Commerce-blue)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen)
![Bootstrap](https://img.shields.io/badge/Frontend-Bootstrap-purple)

ShoeHub is a full-stack footwear e-commerce web application where users can browse shoes, manage carts, place orders, and manage their profiles.

The project also includes a complete seller management system where sellers can manage products, view orders, update order status, and manage their store.

The application is built using **Node.js, Express.js, MongoDB, EJS, Bootstrap, JWT Authentication, and Nodemailer**.

---

# ✨ Features

## 👤 User Module

### Authentication
- User registration
- User login
- Secure password encryption using bcrypt
- JWT based authentication
- Cookie based session handling
- Logout functionality

### Password Management
- Forgot password
- Email based password reset
- Secure reset token generation
- Token expiry validation

### Shopping Features
- View all products
- Product details page
- Product search
- Product filtering
- Add products to cart
- Update cart quantity
- Remove products from cart
- Wishlist management

### Order Management
- Checkout system
- Place orders
- View order history
- View order details
- Order confirmation emails
- Shipping notification emails

### Profile Management
- View profile
- Update profile details
- Upload profile image

### Feedback & Contact
- Submit feedback
- Contact support
- Feedback thank you email


---

# 🏪 Seller Module

A separate seller panel is implemented for managing store operations.


## Seller Authentication

- Seller registration
- Seller login
- Seller logout
- JWT protected seller routes
- Seller forgot password
- Seller password reset through email


## Seller Dashboard

Seller can:

- View total users
- View total products
- View total orders
- Track revenue
- View recent orders


## Product Management

Seller can:

- Add new products
- Upload product images
- Edit products
- Manage product stock
- Delete products


## Order Management

Seller can:

- View customer orders
- Check order details
- Update order status
- Manage shipping process


## Seller Profile

- View seller profile
- Update seller information
- Manage store details


---

# 📧 Email Services

Email functionality is implemented using **Nodemailer**.


Available emails:

✅ Welcome email after registration

✅ Password reset email

✅ Order confirmation email

✅ Order shipped notification

✅ Feedback thank you email


---

# 🛠️ Technologies Used


## Frontend

- HTML5
- CSS3
- Bootstrap 5
- JavaScript
- EJS Template Engine


## Backend

- Node.js
- Express.js


## Database

- MongoDB


## Authentication

- JWT
- Cookies
- bcrypt


## Packages

- Nodemailer
- Multer
- dotenv
- express-ejs-layouts
- cookie-parser
- cors


---

# 📂 Project Structure


```
ShoeHub
│
├── src
│   │
│   ├── config
│   │   ├── emailService.js
│   │   ├── mailer.js
│   │   └── mongoDb.js
│   │
│   ├── errorFile
│   │   └── applicationError.js
│   │
│   ├── features
│   │   │
│   │   ├── users
│   │   │
│   │   ├── product
│   │   │
│   │   ├── productDetails
│   │   │
│   │   ├── cart
│   │   │
│   │   ├── order
│   │   │
│   │   ├── wishlist
│   │   │
│   │   ├── contact
│   │   │
│   │   ├── profile
│   │   │
│   │   └── seller
│   │       │
│   │       ├── user
│   │       ├── product
│   │       ├── order
│   │       ├── profile
│   │       └── feedback
│   │
│   ├── middlewares
│   │   ├── jwtAuthMiddleware.js
│   │   ├── sellerAuthMiddleware.js
│   │   ├── fileUploadsMiddleware.js
│   │   └── validationMiddleware.js
│   │
│   ├── views
│   │   │
│   │   ├── layouts
│   │   ├── partials
│   │   ├── seller
│   │   └── user pages
│   │
│   ├── public
│   │
│   ├── app.js
│   └── server.js
│
├── uploads
│
├── swagger.json
├── package.json
├── .env
├── .gitignore
└── README.md

```


---

# ⚙️ Installation


## Clone Repository

```bash
git clone https://github.com/Kashish-web09/ShoeHub
```


## Navigate Into Project

```bash
cd ShoeHub
```


## Install Dependencies

```bash
npm install
```


---

# 🔐 Environment Variables


Create a `.env` file in the root folder.


Example:


```env
PORT=4090

MONGO_URL=your_mongodb_connection_string

JWT_SECRETKEY=your_secret_key


EMAIL=your_email@gmail.com

EMAIL_PASSWORD=your_email_password
```


---

# ▶️ Run Project


Start server:


```bash
npm start
```


Application will run on:


```
http://localhost:4090
```


---

# 🌐 Application Routes


## User Routes

```
/api/users
```

Includes:

- Register
- Login
- Forgot Password
- Reset Password


---

## Product Routes

```
/api/products
```

Includes:

- Product listing
- Product details
- Product operations


---

## Cart Routes

```
/api/cart
```

Includes:

- Add cart item
- Update cart
- Remove cart item


---

## Wishlist Routes

```
/api/wishlist
```


Includes:

- Add wishlist item
- Remove wishlist item


---

## Order Routes

```
/api/orders
```


Includes:

- Checkout
- Place order
- Order history


---

## Seller Routes

```
/api/seller
```


Includes:

- Seller login
- Seller registration
- Seller dashboard
- Seller password reset


---

# 🔒 Security Features


- Password hashing with bcrypt
- JWT authentication
- Protected routes
- Secure cookies
- Environment variable configuration
- Input validation
- Role based seller authentication


---

# 🖼️ File Upload


Images are uploaded using:

```
Multer
```


Stored inside:


```
uploads/
```


Used for:

- Product images
- Seller profile images
- User profile images


---

# 🗄️ Database Collections


MongoDB collections:


```
users

sellerAcc

products

cart

orders

wishlist

feedback

contact
```



# 🚀 Future Improvements


- Payment gateway integration
- Admin dashboard
- Product reviews and ratings
- Advanced analytics
- Deployment on cloud
- Product recommendation system


---

# 👨‍💻 Developer


**Kashish Narang**

Full Stack Developer


Project:

**ShoeHub E-Commerce Platform**


---

# 📄 License


This project is developed for learning and portfolio purposes.
