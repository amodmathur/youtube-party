const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on("connection", function(socket) {
    console.log("USER CONNECTED");
});

http.listen(3000, function() {
    console.log("Listening on *:3000");
})


// app.use(app.static(__dirname));

app.get('/', function(req, res) {
    console.log("Home Page");
    res.sendFile('/index.html', {root: __dirname});
});

// var server = app.listen(3000, function()  {
//     console.log("Listening on port 3000...");
// });
