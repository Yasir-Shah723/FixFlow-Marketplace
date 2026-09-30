# FixFlow

FixFlow is a modern local service marketplace built with React + Vite on the frontend and Express + MongoDB on the backend. The platform connects customers with verified local professionals, supports quote comparison, booking management, real-time chat, service tracking, and platform administration.

## Features

- Customer registration and authentication
- Service categories with matching logic
- Provider discovery and profile browsing
- Service request creation with provider matching
- Quote handling and booking flow
- Real-time chat and notifications
- Provider dashboard, customer dashboard and admin dashboard
- Responsive, mobile-first dark and light themes
- Seed data for local Pakistani market scenarios

## Tech Stack

- Frontend: React, Vite, Tailwind CSS, Framer Motion, React Router, Axios
- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, Socket.IO
- Security: Helmet, CORS, rate limiting, JWT protection, validation

## Project Structure

```text
FixFlow/
├── backend/
│   ├── app.js
│   ├── server.js
│   ├── .env.example
│   ├── API.md
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seeds/
│   ├── services/
│   ├── sockets/
│   ├── uploads/
│   └── utils/
├── frontend/
│   ├── src/
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
├── .gitignore
├── README.md
└── package.json
```

## Quick Start

### 1. Install dependencies

```bash
cd backend && npm install
cd ../frontend && npm install
```

### 2. Configure environment variables

Create backend/.env from the example file:

```bash
cp backend/.env.example backend/.env
```

Example values:

```env
PORT=5001
MONGODB_URI=mongodb://127.0.0.1:27017/fixflow
JWT_SECRET=replace-with-secure-random-string
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:5173
ADMIN_EMAIL=admin@fixflow.com
ADMIN_PASSWORD=Admin123!
```

Frontend .env:

```env
VITE_API_URL=http://localhost:5000/api/v1
```

## Running the app

Backend:

```bash
cd backend
npm run dev
```

Frontend:

```bash
cd frontend
npm run dev
```

The app is available at:

- Frontend: http://localhost:5173
- Backend: http://localhost:5001/api/v1

## Seed Data

```bash
cd backend
npm run seed
```

Demo accounts:

- Customer: customer@fixflow.com / Customer123!
- Provider: provider@fixflow.com / Provider123!
- Admin: admin@fixflow.com / Admin123!

## Notes

This project is designed as a working local prototype for a service marketplace. It includes production-style structure, responsive design, seed content, and API endpoints for a real app foundation.

## Future Improvements

- Replace demo data with MongoDB-backed records and persistent file uploads
- Add dedicated provider verification workflows and admin moderation screens
- Integrate Stripe or another payment gateway
- Add a stronger real-time conversation and notification architecture
- Expand service-search and provider-match filtering
