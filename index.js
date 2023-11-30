const express = require("express");
const mongoose = require("./config/db");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Backend Assignment");
});

//Registeration Route
// app.post("/register", register);

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
