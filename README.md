# E- Commerce Website:

A full-stack e-commerce website designed to provide a clean, modern, and seamless shopping experience. This project was built to demonstrate a complete MERN-stack (MongoDB, Express, React/Next.js, Node.js) application, enabling users to browse products, manage a shopping cart, and handle user authentication.

The application is split into two main parts:

A Next.js frontend for a fast, server-rendered user interface.

A Node.js & Express backend API to manage data, authentication, and business logic.

---

## 🛍️ Project Overview

The core functionality of the website includes all the essential features of a modern e-commerce platform:

### 🔐 User Authentication
- Users can **create a new account (Register)** and **sign in (Login)** to their existing account.  
- Passwords are securely **hashed using `bcryptjs`** before being stored in the database.

### 🛒 Product Browsing
- **All Products Page:** Displays all available products fetched dynamically from the MongoDB database.  
- **Product Details Page:** A dynamic route that shows detailed information for each product based on its unique ID.

### 🧺 Shopping Cart
- A **client-side cart** implemented using **React Context API**.  
- Users can **add products**, **update quantities**, or **remove items** easily with a seamless UI experience.

### 🔒 Protected Routes
- Certain pages, such as the **User Profile**, are **restricted to logged-in users only**.  
- Unauthorized users are redirected to the login page.

### 👤 User Profile
- A **protected page** where logged-in users can view their **account details**, including:
  - Name  
  - Email  
  - Role (**Admin** / **Customer**)

### ⚙️ Backend API
- A **RESTful API** built with **Node.js** and **Express.js**.  
- Handles all database operations (CRUD) for **users** and **products**.  
- Connects to a **MongoDB database** using **Mongoose** for schema management and data persistence.

---

## Overview of the Project

<img width="1855" height="864" alt="image" src="https://github.com/user-attachments/assets/54041162-6db7-4bfb-a592-c67dda174fa6" />
<img width="1267" height="714" alt="image" src="https://github.com/user-attachments/assets/437f1dcf-3c1f-49de-b1e2-584aa32db872" />

---

## ⚙️ Project Tech Stack

The project utilizes a **modern stack** for both frontend and backend development.

### 🖥️ Frontend (Client-Side)

- **Framework:** [Next.js (v16)](https://nextjs.org/)  
- **Language:** JavaScript (React)  
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)  
- **State Management:** React Context API (for `AuthContext` and `CartContext`)  
- **API Client:** [Axios](https://axios-http.com/) (for making HTTP requests to the backend)  
- **Linting:** [ESLint](https://eslint.org/) (for code consistency and quality)


### ⚙️ Backend (Server-Side)

- **Framework:** [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)  
- **Database ODM:** [Mongoose](https://mongoosejs.com/) (for MongoDB object modeling)  
- **Authentication:** [JSON Web Tokens (JWT)](https://jwt.io/) and [bcryptjs](https://www.npmjs.com/package/bcryptjs) (for password hashing)  
- **Middleware:** [CORS](https://www.npmjs.com/package/cors) (for cross-origin requests), [dotenv](https://www.npmjs.com/package/dotenv) (for environment variables)


### 🗄️ Database

- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas) (Cloud-hosted MongoDB service)

💡 This stack ensures a **secure, scalable, and high-performance** e-commerce application with seamless frontend-backend integration.

---

## ⚙️ Setup and Installation

To get this project running locally, you need to set up both the **backend** and **frontend** services.

---

### 🧩 Backend Setup

#### 1. Navigate to the Backend Directory
```bash
cd backend
```

#### 2. Install Dependencies

```bash
npm install
```

This will install Express, Mongoose, CORS, dotenv, and other required packages.

#### 3. Set Up Environment Variables

Create a file named .env in the backend directory.
Add the following environment variables:

```bash
MONGO_URI=mongodb+srv://<your_user>:<your_password>@cluster0.zw8mgu4.mongodb.net/<your_db_name>
JWT_SECRET=your_super_secret_key_here
```

#### 4. Run the Backend Server

```bash
npm start
```

Your server will start, connect to MongoDB, and be accessible at:
👉 [`http://localhost:5000`](http://localhost:5000)

### Frontend Setup:

#### 1. Navigate to the Frontend Directory

```bash
cd frontend
```

#### 2. Install Dependencies

```bash
npm install
```

This will install Next.js, React, Axios, Tailwind CSS, and other required packages.

#### 3. Set Up Environment Variables

Create a `.env.local` file in the frontend directory and add:
```bash
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```
- ⚙️ This is based on your frontend/lib/api.js file and backend server.js configuration.

#### 4. Run the Frontend Development Server

```bash
npm run dev
```

Your frontend app will be accessible at:
👉 [`http://localhost:3000`](http://localhost:3000)

---

## 🙏 Acknowledgement

This project serves as a foundational template for a **full-stack e-commerce application**.  
It integrates best practices for both **frontend** and **backend** development — including **API routing**, **database modeling**, **user authentication**, and a **component-based UI** built with **React** and **Next.js**.  
The goal is to provide a scalable, maintainable, and modern structure for developers building robust e-commerce platforms.


---

💡 This project delivers a complete end-to-end e-commerce solution — from secure authentication to product management and a dynamic shopping experience.
