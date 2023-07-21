require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();
const http = require("http");

const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const port = process.env.PORT;

app.use("/", express.static(path.join(__dirname, "../../frontend/dist")));

io.on("connection", (socket) => {
  console.log("a user connected");
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
