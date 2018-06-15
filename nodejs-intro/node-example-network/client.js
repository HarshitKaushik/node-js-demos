const net = require('net');
let client = net.connect({ port: 3000 });
// Understand that whenever our filewatcher.js does a connection.write(), our client gets a data event.
client.on('data', (data) => {
  // we log the data to the console for the client
  console.log(data.toString());
});