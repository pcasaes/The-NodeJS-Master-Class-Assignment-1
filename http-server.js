/**
 * Creates and start an http server
 *
 */

const http = require('http');
const config = require('./config');

// Instantiate the HTTP server
function startHttpServer(callback) {
    const httpServer = http.createServer(callback);

    // Start the http server, and have it listen to port ${config.httpPort}.
    httpServer.listen(config.httpPort, () => {
        console.log(`The http server is listening on port ${config.httpPort} in ${config.envName} mode.`);
    });
}

const server = {
    /**
     * starts an http server
     * callback - a callback function that receives a request and response object
     */
    "start": startHttpServer
};

// Export the module
module.exports = server;