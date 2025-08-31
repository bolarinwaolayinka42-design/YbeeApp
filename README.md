# YbeeApp - Ybee Management Dashboard

A simple **management dashboard** built with **Node.js**, **Express**, **EJS**, and **session-based authentication**. This app allows users to log in, manage tickets, update statuses, and track a ticket summary chart.

---

## Features

- User registration and login with **bcrypt password hashing**
- Session management using **express-session**
- Dashboard with:
  - Ticket summary (Open, Pending, Closed)
  - Update ticket status
  - Assign tickets to users
  - Delete tickets
- Chart.js integration for visual ticket summary
- Data stored in `data.json` (simple JSON file storage)
- Clean EJS-based views and static assets

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

1. Clone the repo:
`git clone https://github.com/bolarinwaolayinka42-design/YbeeApp`
`cd YbeeApp`

2. Install dependencies:


`npm install`
Create a .env file in the root directory:

env

SESSION_SECRET=your_super_secret_key_here
Important: Do not commit this file to GitHub.

Start the server:


node server.js
Open your browser and go to:

``http://localhost:3000``

Project Structure

YbeeApp/
├── public/           # CSS, JS, and static assets
├── views/            # EJS templates
├── data.json         # Ticket storage
├── server.js         # Main Express app
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

Security Note

Your session secret is stored in .env and should never be pushed to GitHub.

Add .env to .gitignore:





