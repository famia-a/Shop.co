# 🛍️ E-Commerce Store

A modern and responsive e-commerce website built with **React**, based on a **Figma UI design**.

The project uses product data from an external API to dynamically display products and includes a functional shopping cart where users can add and manage their selected products.

## ✨ Features

* 🎨 **Figma-based UI** — Website designed and developed from a Figma design.
* 🛍️ **Dynamic Products** — Product information is fetched from an external API.
* 🔎 **Product Display** — Products are displayed dynamically instead of being hardcoded.
* 🛒 **Shopping Cart** — Users can add products to their cart.
* ➕ **Add to Cart** — Add products directly from the product listing.
* 📦 **Cart Management** — View and manage products added to the cart.
* 📱 **Responsive Design** — Designed to work across different screen sizes.
* ⚡ **React + Vite** — Fast development and modern frontend setup.

## 🛠️ Tech Stack

* **React**
* **JavaScript**
* **Vite**
* **CSS / Tailwind CSS** *(remove this if you didn't use Tailwind)*
* **API Integration**
* **Git & GitHub**

## 🔄 How It Works

The application follows a simple e-commerce flow:

```text
External Product API
        ↓
    Fetch Products
        ↓
   Display Products
        ↓
   User Selects Product
        ↓
      Add to Cart
        ↓
     Cart Page
        ↓
  Manage Cart Items
```

## 📁 Project Structure

```text
src/
├── components/
├── pages/
├── assets/
├── api/
├── App.jsx
└── main.jsx
```

> The exact folder structure may vary depending on the implementation.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd YOUR_PROJECT_NAME
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available on the local development URL provided by Vite.

## 🔑 API

This project uses an external product API to retrieve product information such as:

* Product name
* Product image
* Price
* Product category
* Product description

The API allows the store to display dynamic product data without manually adding every product.

## 🛒 Shopping Cart

The project includes a functional shopping cart.

Users can:

* Add products to the cart
* View selected products
* Manage cart items
* Review product prices
* Continue browsing products

## 🎨 Design

The interface was developed based on a Figma design and then translated into a responsive React application.

The goal was to maintain the visual structure of the original design while implementing real functionality such as API-based products and cart interactions.

## 📸 Screenshots

Add screenshots of your project here:

```md
![Home Page](./screenshots/home.png)

![Products](./screenshots/products.png)

![Shopping Cart](./screenshots/cart.png)
```

## 📚 What I Learned

Through this project, I practiced:

* Building a React application from a Figma design
* Working with APIs and asynchronous data
* Rendering dynamic product data
* Managing application state
* Building shopping cart functionality
* Creating reusable React components
* Making a responsive user interface
* Structuring a frontend project
* Using Git and GitHub for version control

## 🚧 Future Improvements

Some features that could be added in the future:

* User authentication
* Product search
* Category filtering
* Product detail pages
* Wishlist functionality
* Persistent cart using localStorage
* Checkout page
* Payment integration
* Order history


**Famia Shakeel**

This project was created as a frontend development project to practice React, API integration, state management, and converting UI designs into functional web applications.

## 📄 License

This project is for educational and portfolio purposes.
