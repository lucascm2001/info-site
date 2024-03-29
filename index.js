const http = require('http');
const fs = require('fs');

function fileToScreen(res, err, data) {
  if (err) console.error(err);
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  return res.end();
}

http.createServer((req, res) => {
  if (req.url === '/') {
    // take them to index.html
    fs.readFile('./index.html', (err, data) => fileToScreen(res, err, data));
  } else if (req.url === '/about') {
    fs.readFile('./about.html', (err, data) => fileToScreen(res, err, data));
  } else if (req.url === '/contact-me') {
    fs.readFile('./contact-me.html', (err, data) => fileToScreen(res, err, data));
  } else {
    fs.readFile('./404.html', (err, data) => fileToScreen(res, err, data));
  }
}).listen(8080);
