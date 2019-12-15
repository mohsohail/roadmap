import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8001');

const subscribeToTimer = callback => {
  socket.on('timer', timeStamp => {
    callback(null, timeStamp);
  });
  socket.emit('subscribeToTimer', 1000);
};

export { subscribeToTimer };
