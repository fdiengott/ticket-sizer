const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: ["http://localhost:5173/", "http://127.0.0.1:5173"],
    },
});

io.on("connection", socket => {
    const admin = "";
    const users = [];

    socket.on("login", user => {
        users.push(user);

        io.emit("new-user", user);
    });

    socket.on("assign-admin", adminCandidate => {
        console.log(adminCandidate);

        admin ||= adminCandidate;
    });

    // ask for username and add to list

    console.log(socket.id);
});

io.listen(3000);
