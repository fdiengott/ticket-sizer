import { Socket, Server } from "socket.io";

// const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: ["http://localhost:5173/", "http://127.0.0.1:5173"],
    },
});

type UserType = {
    username: string;
    admin: boolean;
};

type VoteType = {
    username: string;
    value: number;
};

io.on("connection", (socket: Socket) => {
    let admin: UserType | undefined;
    const users: UserType[] = [];

    socket.on("login", (user: UserType) => {
        if (user.admin && !admin) {
            admin = user;

            io.emit("admin", user);
        }

        users.push(user);

        io.emit("users", users);
    });

    let currentVotes: VoteType[] = [];

    socket.on("vote", (vote: VoteType) => {
        currentVotes.push(vote);

        io.emit("votes", currentVotes);
    });

    socket.on("clear-votes", () => {
        currentVotes = [];
    });
});

io.listen(3000);
