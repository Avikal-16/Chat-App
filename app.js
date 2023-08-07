const express = require("express")
const { createConnection } = require("net")
const path = require("path")
const app = express()

const PORT = process.env.PORT || 4000
const server = app.listen(PORT, ()=> console.log(`chat server on port ${PORT}`))

const io = require("socket.io")(server)

let socketsconnected = new Set()

app.use(express.static(path.join(__dirname,'public')))

io.on('connection', onconnection)

function onconnection(socket){
    console.log(socket.id)
    socketsconnected.add(socket.id)

    io.emit('clients-total', socketsconnected.size)

    socket.on('disconnect', ()=>{
        console.log("Socket disconnected", socket.id)
        socketsconnected.delete(socket.id)
        io.emit('clients-total', socketsconnected.size)
    })

    socket.on('message', (data) =>{
        console.log(data)
        socket.broadcast.emit('chat-message', data)
    })
    
    socket.on('feedback', (data) =>{
    socket.broadcast.emit('feedback', data)
    
    })

}