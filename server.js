require('dotenv').config(); // Load environment variables

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const fs = require("fs");
const bcrypt = require("bcrypt");

const app = express();
const PORT = 3000;

// Middleware
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallbacksecret",
    resave: false,
    saveUninitialized: false,
  })
);

// In-memory users
let USERS = [];

// Utility functions for tickets
const getTickets = () =>
  fs.existsSync("data.json") ? JSON.parse(fs.readFileSync("data.json")) : [];
const saveTickets = (tickets) =>
  fs.writeFileSync("data.json", JSON.stringify(tickets, null, 2));

// -------------------- ROUTES --------------------

// Login page
app.get("/", (req, res) => res.render("login", { error: null }));

app.post("/", async (req, res) => {
  const { email, password } = req.body;
  const user = USERS.find((u) => u.email === email);

  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    res.redirect("/dashboard");
  } else {
    res.render("login", { error: "Invalid credentials!" });
  }
});

// Register page
app.get("/register", (req, res) => res.render("register", { error: null }));

app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  const existingUser = USERS.find((u) => u.email === email);

  if (existingUser) {
    res.render("register", { error: "Email already exists!" });
  } else {
    const hashedPassword = await bcrypt.hash(password, 10);
    USERS.push({ email, password: hashedPassword });
    req.session.user = { email };
    res.redirect("/dashboard");
  }
});

// Dashboard
app.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/");

  const tickets = getTickets();
  const ticketSummary = tickets.reduce(
    (acc, t) => {
      acc[t.status] = (acc[t.status] || 0) + 1;
      return acc;
    },
    { Open: 0, Pending: 0, Closed: 0 }
  );

  res.render("dashboard", {
    user: req.session.user.email,
    tickets,
    ticketSummary,
    users: USERS,
  });
});

// Update ticket status
app.post("/tickets/update/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  let tickets = getTickets();
  tickets = tickets.map((t) => (t.id === id ? { ...t, status } : t));
  saveTickets(tickets);

  res.redirect("/dashboard");
});

// Assign ticket
app.post("/tickets/assign/:id", (req, res) => {
  const { id } = req.params;
  const { assignedTo } = req.body;

  let tickets = getTickets();
  tickets = tickets.map((t) => (t.id === id ? { ...t, assignedTo } : t));
  saveTickets(tickets);

  res.redirect("/dashboard");
});

// Delete ticket
app.post("/tickets/delete/:id", (req, res) => {
  const { id } = req.params;

  let tickets = getTickets();
  tickets = tickets.filter((t) => t.id !== id);
  saveTickets(tickets);

  res.redirect("/dashboard");
});

// Logout
app.get("/logout", (req, res) => {
  req.session.destroy(() => res.redirect("/"));
});

// Start server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
