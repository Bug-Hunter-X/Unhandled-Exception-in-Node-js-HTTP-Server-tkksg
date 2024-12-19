const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an error that might occur during request processing
  if (Math.random() < 0.5) {
    throw new Error('Simulated request processing error');
  }

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World');
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});