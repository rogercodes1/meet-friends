const io = require('socket.io')();
const port = 8000;



io.on('connection', client => {
  console.log('User Connected');

  // client.on('postMessage', function(data){
  //   io.emit('updateMessages', data)
  // });
});
io.listen(port);
console.log('listening on port ', port);
