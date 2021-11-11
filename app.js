const e = require("express");
const http = require("http");
const app = require('express')()
const port = 3000
let path = require('path');

let m = true;
let keys = ["135F45F9B4D6B5E5E8397B4861AD9751AE55F93FF4AE72E760E84AB5A6B05F53"];
let deviceID = [];
let webID = [];
let status = {};
const server = http.createServer(app);
const {Server} = require("socket.io");
const express = require("express");
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
});
io.on('connection', (socket) => {
    socket.emit("Welcome", "Welcome to Webroze Your socket ID is " + socket.id)
    socket.on('RegisterDevice', (data) => {
        if(keys.includes(data.key)){
            deviceID.push(socket.id)
        }
        socket.emit("Status","Update your status" + socket.id)
        console.log("deviceID : ",deviceID)
        for (let webIDElement of webID) {
            io.sockets.to(webIDElement.toString()).emit("DeviceId", deviceID)
        }
     /*   io.sockets.allSockets().then( (data)=>{
            for (let socketId of data) {
                webID = webID.filter(function( obj) {
                    return obj === socketId;
                });
                deviceID = deviceID.filter(function( obj) {
                    return obj === socketId;
                });
            }
            console.log("deviceID",deviceID)
            console.log("webID",webID)
        })*/

        /*for (let socket1 of io.sockets) {
            webID = webID.filter(function( obj) {
                return obj !== socket1;
            });
            deviceID = deviceID.filter(function( obj) {
                return obj !== socket1;
            });
        }*/
    });
    socket.on('JoinUser', (data) => {
        webID.push(socket.id)
        console.log("webID : ",webID)
        socket.emit("Data",status)
        io.sockets.to(socket.id).emit("DeviceId", deviceID)
      });
    socket.on('status', (data) => {
        console.log("status : ",data)
        status = data;
        for (let webIDElement of webID) {
            io.sockets.to(webIDElement.toString()).emit("Data", status)
        }
    });
    socket.on('API', (data) => {
        console.log("API : ",data)
        let command = data.command;
        let pinIndex = data.pinIndex;
        pinIndex = pinIndex.split("")[1];
        pinIndex = pinIndex-2;
        let cmd = "CMDD" + pinIndex + command;
        console.log(cmd)
        for (let deviceIDElement of deviceID) {
            io.sockets.to(deviceIDElement.toString()).emit(cmd, `Update your status${deviceIDElement}`)
        }

    });
    socket.on('disconnect', async () => {
        console.log("=========came inside disconnect========");
        webID = webID.filter(function( obj) {
            return obj !== socket.id;
        });
        deviceID = deviceID.filter(function( obj) {
            return obj !== socket.id;
        });
        console.log("deviceID",deviceID)
        console.log("webID",webID)
    })

});
let indexPath = path.join(__dirname, './build');

app.use(express.static(indexPath));
app.get('/*', function (req, res) {
    console.log("indexPath",indexPath)
    res.sendFile(indexPath);
});


server.listen(3005);
//

