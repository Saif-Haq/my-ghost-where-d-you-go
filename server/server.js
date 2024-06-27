import cors from "cors";
import express from "express";
import records from "./routes/record.js";
import ghosters from "./routes/ghoster.js";
import dotenv from "dotenv";
import { Server } from "socket.io";
import http from "http";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", records);
app.use("/ghoster", ghosters);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("draw_cursor", (data) => {
    io.emit("draw_cursor", { line: data.line, id: socket.id });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
