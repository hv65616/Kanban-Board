const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173/",
  },
});
const PORT = 5000;
app.use(cors());
app.use(express.json());

io.on("connection", () => {
  console.log("a user is connected");
});
server.listen(PORT, (req, res) => {
  console.log("Server is running on port 5000");
});
