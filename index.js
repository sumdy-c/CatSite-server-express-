const express = require("express");
const path = require("path");

const app = express();

app.use(express.json({ extended: true }));

app.use("/server", express.static("images"));

app.use("/api", require("./routes/upload.routes.js"));

const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server started at " + PORT);
});
