# Ybee Management Dashboard

![Node.js](https://img.shields.io/badge/node-%3E%3D14.0-green)
![License](https://img.shields.io/badge/license-MIT-blue)
![Issues](https://img.shields.io/github/issues/bolarinwaolayinka42-design/YbeeApp)
![Last Commit](https://img.shields.io/github/last-commit/bolarinwaolayinka42-design/YbeeApp)

---

## About
A simple **management dashboard** built with **Node.js**, **Express**, **EJS**, and **session-based authentication**.
...


YbeeApp – Management Dashboard

YbeeApp is a lightweight management and ticketing web application built with Node.js, Express, and EJS. It enables teams to track tasks, manage tickets, and monitor progress through a simple but effective dashboard.

Features

User Authentication – Register, login, and logout securely.

Dashboard View – Welcome screen personalized for each user.

Ticket Management –

Create, view, and update support/project tickets.

Track ticket status (Open, Pending, Closed).

Assign tickets to team members.

Delete tickets when resolved.
Create tickets

Analytics Dashboard – Visualize ticket distribution using Chart.js.

Team Collaboration – Assign tickets to registered users dynamically.

Tech Stack

`Backend: Node.js + Express`

`Frontend: EJS templating + CSS`

`Database: JSON file (for demo) – can be extended to MongoDB or SQL`

`Charts: Chart.js`

`Authentication: Simple session-based auth`

Structure

YbeeApp/
│
├── public/              
│   └── css/style.css
├── views/               
│   ├── index.ejs
│   ├── login.ejs
│   ├── register.ejs
│   └── dashboard.ejs
├── users.json           
├── server.js            
├── package.json
└── README.md

Getting Started
1. Clone the repo

`git clone https://github.com/bolarinwaolayinka42-design/YbeeApp.git`
`cd YbeeApp`

2. Install dependencies
 `npm install`

 3.Run the app
` node server.js`
4. Make sure to install bcryptjs for password hashing:
   `npm install bcryptjs`

   App will be running on http://localhost:3000

   Screenshots
Dashboard with Ticket Summary

Why this project matters

This project is more than a dashboard — it demonstrates how to build a real-world management system from scratch with authentication, CRUD functionality, analytics, and team collaboration. It’s a solid foundation for scaling into a SaaS product.

