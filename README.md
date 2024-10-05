### 🛒 E-commerce Prototype with React & TypeScript [💻Live Version](https://react-shop-saal.vercel.app/shop)

This project demonstrates the implementation of best practices for building a scalable e-commerce application using React and TypeScript. It prioritizes minimal dependencies, focusing on creative solutions without relying heavily on third-party libraries.

### Project Overview

This is a prototype showcasing real-world context management and best practices for building a React application. It demonstrates effective code organization, separation of concerns, and robust scaffolding.

**Key Features:**

- **Frontend:** React & TypeScript
- **Styling:** Tailwind CSS (custom component creation)
- **State Management:**
  - `useState` for local state
  - `useReducer` for interrelated state
  - Zustand for simple, minimally invasive global state
- **Authentication:** Token-based authentication with login, logout, and route/DOM protection.
- **Backend:** Custom Go CMS with database API and SDK
- **E-commerce Functionality:**
  - Products: View, search, and purchase products
  - Cart & Order Management
  - Private area for product & order management

### Technologies Used

- React
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Pocket Base CMS (Backend)

### Project Setup

1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Server (Docker required - in alternative use prod environment):
   ```bash
   cd server
   docker compose up -d
   ```
4. Start WebApp:
   ```bash
   npm run dev
   ```
   navigate http://localhost:5173/
   <br/>
   <br/>
   ```bash
   Test User credentials:
   user: user@mail.io
   password: gHGTfcLz3RXZQAt
   ```
