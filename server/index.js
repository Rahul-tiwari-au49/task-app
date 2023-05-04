const express = require('express');
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require('socket.io');
const cors = require("cors");

app.use(cors());
const UID = () => Math.random().toString(36).substring(2, 10);
let tasks = {
    pending: {
        title:"pending",
        items: [
            {
                id: UID(),
                title:"Send the Figma file to Dima",
                comments:[],
            },
        ],
    },
    ongoing:{
        title:"ongoing",
        items:[
            {
                id:UID(),
                title: "Review GITHUB issues",
                comments:[
                    {
                        name:"DAVID",
                        text:"Ensure you review before merging",
                        id:UID(),
                    },
                ],
            },
        ],
    },
};

const io = new Server(server,{
    cors: {
        origin: "http://127.0.0.1:5173",
    },
});
const PORT = 5000;

app.get("/api",(req, res) => {
    res.json(tasks);
});

io.on('connection', (socket) =>{
    console.log(`${socket.id} a user connected`);

    socket.on("taskDragged",(data)=>{
        const { source, destination }= data;
        const itemMoved = {
            ...tasks[source.droppableId].items[source.index],
        };
        tasks[source.droppableId].items.splice(source.index,1);
        tasks[destination.droppableId].items.splice(
            destination.index,
            0,
            itemMoved
        );
        io.socket.emit("tasks",tasks);
    });

    socket.on('disconnect',()=>{
        socket.disconnect();
        console.log(`${socket.id} a user disconnected`);
    });
});


server.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`);
})