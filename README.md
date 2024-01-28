# **Fullstack Login & Register Page with MERN**

## **Overview**

This repository contains the code for a Fullstack Login & Register Page built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The frontend is developed with Vite + React, while the backend incorporates MongoDB for data storage, Express for server-side logic, bcrypt for password hashing, and JSON Web Tokens (JWT) for authentication.


## **Features**

- **User Authentication:** Implement secure user authentication with bcrypt for password hashing and JWT for token-based authentication.
- **MongoDB Integration:** Utilize MongoDB as the database to store user information securely.
- **React.js with Vite:** Build a modern and efficient frontend using React.js with Vite for faster development.
- **Styled Components:** Employ styled components for styling, providing a modular and maintainable approach to styling React components.


## **Technologies Used**

### Frontend:
React.js
Vite

### Backend:
Node.js
Express.js
MongoDB

### Authentication:
bcrypt
JSON Web Tokens (JWT)

### Styling:
Styled Components

## **Getting Started**

### Prerequisites
- Node.js and npm installed
- MongoDB installed locally or accessible remotely

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo.git
   ```

2. Install dependencies for both frontend and backend:
   ```
   # Navigate to the frontend directory
   cd client
   npm install

   # Navigate to the backend directory
   cd server
   npm install
   ```

3. Configure environment variables. Create a **.env** file in the backend directory and set the following variables:
   ```
   MONGO_URI=your_mongo_database_uri
   JWT_SECRET=your_jwt_secret
   ```

## Running the Application

1. Start the backend server:
   ```
   # Navigate to the backend directory
   cd server
   npm start
   ```

2. Start the frontend development server:
   ```
   # Navigate to the frontend directory
   cd client
   npm run dev
   ```



