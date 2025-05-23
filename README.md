# Authentication System

A complete authentication system built with React.js, Node.js, and MongoDB.

## Features

- User registration with name, email, password, and date of birth
- User login with JWT authentication
- Protected routes for authenticated users
- User dashboard with data table
- MongoDB for user data storage

## Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add the following variables:
     ```
     PORT=5000
     JWT_SECRET=your-secret-key
     ```

4. Start the development server:
   ```
   npm run dev:all
   ```

## Project Structure

- `/src` - React frontend
  - `/components` - Reusable UI components
  - `/context` - Authentication context for state management
  - `/pages` - Main pages of the application
- `/server` - Node.js backend
  - `/models` - MongoDB data models
  - `/routes` - API routes
  - `/middleware` - Custom middleware functions

## Usage

1. Register a new account
2. Login with your credentials
3. View and interact with the user dashboard

## Technologies Used

- Frontend: React.js, React Router, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT (JSON Web Tokens)