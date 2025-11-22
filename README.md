🛒 MERN E-Commerce App

A full-stack E-Commerce web application built with the MERN stack — MongoDB, Express.js, React.js, Node.js — including authentication, product management, cart system, payments, and admin dashboard.

🚀 Features

🔐 Authentication
Register / Login (JWT-based)
User & Admin roles

🛍️ E-Commerce Functionality
Product listing
Product categories
Product filtering
Product search
Add to cart / Remove from cart

💳 Payment Integration
Braintree Payment Gateway

🛠️ Admin Features
Create, update, delete products
Manage categories
Manage orders

📱 Responsive UI
Built with React & Ant Design (antd)

📦 Tech Stack
Frontend----
React.js
React Router
Axios
Ant Design
React Icons

Backend-----
Node.js
Express.js
MongoDB + Mongoose
JSON Web Token (JWT)
Bcrypt
Express-Formidable
Payment
Braintree

# How to Run This Project

1. Clone the repo  
   git clone https://github.com/suraj2172002/Mern-Ecommerce-app.git

2. Install backend dependencies  
   npm install

3. Go to client folder and install dependencies  
   cd client  
   npm install

4. Create a .env file in root with the following:
   MONGO_URL=your-mongo-url
   JWT_SECRET=your-secret
   BRAINTREE_PUBLIC_KEY=your-key
   BRAINTREE_PRIVATE_KEY=your-key
   BRAINTREE_MERCHANT_ID=your-id

5. Running the Project
   Option 1 — Start Both (Frontend + Backend)
    From the root folder:
    npm run dev

   Option 2 — Run Individually
    Run Backend:
    npm run server
    Run Frontend:
    cd client
    npm start
   
⚠️ Important Notes
.env files are intentionally ignored using .gitignore.
Without environment variables, the project will not run.
Braintree keys must be valid for payment to work.

🙋‍♂️ Author
Suraj Pathak
Full Stack Developer
India 🇮🇳
