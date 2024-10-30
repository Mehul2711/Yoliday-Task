const express = require("express");
const cors = require("cors");
const data = require("./data.json");

const app = express();
const PORT = 5001;

app.use(express.static("public"));

// Configure CORS to allow requests from localhost:3000
app.use(cors({ origin: "http://localhost:3000" }));

// Define endpoints for each tab
app.get("/api/project", (req, res) => {
  res.json(data.project);
});

app.get("/api/saved", (req, res) => {
  res.json(data.saved);
});

app.get("/api/shared", (req, res) => {
  res.json(data.shared);
});

app.get("/api/achievement", (req, res) => {
  res.json(data.achievement);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
