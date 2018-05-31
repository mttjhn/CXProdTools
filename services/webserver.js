const http = require('http');
const express = require('express');
const morgan = require('morgan');
const database = require('./database.js');
const webServerConfig = require('../config/webserver.js');
const router = require('./router.js');

let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();
    httpServer = http.createServer(app);
    // Use Morgan for logging
    app.use(morgan('combined'));

    // Mount the router at /api so all its routes start with /api
    app.use('/api', router);
 
    httpServer.listen(webServerConfig.port, err => {
      if (err) {
        reject(err);
        return;
      }
 
      console.log(`Web server listening on localhost:${webServerConfig.port}`);
      
      // Tell PM2 we're ready
      process.send('ready');
      resolve();
    });
  });
}
 
module.exports.initialize = initialize;

function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }
 
      resolve();
    });
  });
}
 
module.exports.close = close;