const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error that might occur during request processing
    if (Math.random() < 0.5) {
      throw new Error('Simulated request processing error');
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World');
  } catch (err) {
    console.error('Request processing error:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.on('error', (err) => {
  console.error('Server error:', err);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});