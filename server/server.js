const { Server } = require("socket.io");

const io = new Server({
  cors: {
    origin: ["http://localhost:5173/", "http://127.0.0.1:5173"],
  },
});

io.on("connection", socket => {
  // ask for username and add to list

  console.log(socket.id);
});

io.listen(3000);
