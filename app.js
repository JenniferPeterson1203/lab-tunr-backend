const express = require("express");
const cors = require("cors");

const app = express();

const songsController = require("./controllers/songController");

app.use(cors());
app.use(express.json());

app.use("/songs", songsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to the Tuner App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.json({ error: "Page not found" });
});
// EXPORT
module.exports = app;
