const net = require('net'),
  // We require two modules, fs and net for reading and writing files and doing network connections respectively.
  fs = require('fs'),
  // process.argv[2], process is a global variable that provides vital information about the NodeJs code running.
  filename = process.argv[2],

  server = net.createServer((connection) => {
    console.log('Subscriber connected');
    connection.write(`watching ${filename} for changes`);

    let watcher = fs.watch(filename, (err, data) => {
      connection.write(`${filename} has changed`);
    });

    connection.on('close', () => {
      console.log('Subscriber disconnected');
      watcher.close();
    });

  });
server.listen(3000, () => console.log('listening for subscribers'));