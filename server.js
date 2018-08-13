const express = require('express');
const io = require('socket.io')();
const app = express()

app.set('port', process.env.PORT || 8000 );

let server = app.listen(app.get('port'), ()=>{
  console.log("listening on port " + app.get('port'));
})
io.attach(server)

io.on('connection', (socket)=> {
  console.log('User Connected');

  socket.on('disconnect',()=>{
    console.log('user diconnected');
  });
});


// const app = express()
// const http = require('http');
// const io = require('socket.io')();
// cosnt port = 8000
// io.on('connection', client => {
//   console.log('User Connected');
//   client.on('subcribeToTimer', interval=>{
//     // io.emit('updateMessages', interval)
//     console.log('client is loading', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
// });
//
// const port = 8000;
// io.listen(port);
// console.log('listening on port ', port);
