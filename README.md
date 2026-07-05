# 👟 ShoeHub

ShoeHub is a full-stack e-commerce web application that allows users to browse, search, and purchase shoes while providing sellers with a dedicated dashboard to manage products and orders.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- JWT Authentication
- Browse Products
- Search & Filter Products
- Product Details Page
- Add to Cart
- Wishlist
- Checkout
- Order History
- User Profile Management

### 🛍️ Seller Features
- Seller Registration & Login
- Seller Dashboard
- Add Products
- Edit Products
- Delete Products
- Manage Inventory
- View Orders
- Order Status Management

### 🛠 Admin Features (Optional)
- Manage Users
- Manage Sellers
- Monitor Products

---

# 🖼️ Screenshots

> Add screenshots of your application here.

| Home Page | Product Page |
|-----------|--------------|
| ![Home](screenshots/home.png) | ![Product](screenshots/product.png) |

| Cart | Seller Dashboard |
|------|------------------|
| ![Cart](screenshots/cart.png) | ![Dashboard](screenshots/dashboard.png) |

---

# 🛠 Tech Stack

### Frontend
- HTML5
- CSS3
- Bootstrap 5
- EJS

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Authentication
- JWT
- bcrypt

### API Testing
- Swagger

---

# 📁 Project Structure

```
shoehub
│
├── src
│   ├── config
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── repositories
│   ├── routes
│   ├── views
│   ├── public
│   └── server.js
│
├── uploads
├── swagger.json
├── package.json
└── README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/Kashish-web09/ShoeHub.git
```

Go to project folder

```bash
cd ShoeHub
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=4090
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the application

```bash
npm start
```

Server will run on

```
http://localhost:4090
```

---

# 📚 API Documentation

Swagger documentation is available using:

```
http://localhost:4090/api-docs
```

---

# 📦 Main Modules

- Authentication
- Product Management
- Seller Dashboard
- Cart
- Wishlist
- Orders
- User Profile
- Image Upload
- JWT Authentication

---

# 🔒 Security

- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Input Validation

---

# 🌱 Future Improvements

- Online Payment Gateway (Stripe/Razorpay)
- Product Reviews & Ratings
- Coupon System
- Email Notifications
- Admin Dashboard
- Sales Analytics
- Product Recommendations

---

# 👨‍💻 Author

**Kashish Narang**

- GitHub: https://github.com/Kashish-web09

---

# ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
