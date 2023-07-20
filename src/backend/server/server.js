require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT;

app.use("/", express.static(path.join(__dirname, "../../frontend/dist")));

app.listen(port, () => {
  console.log(`running on ${port}`);
});
