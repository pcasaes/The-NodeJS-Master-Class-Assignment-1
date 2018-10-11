/**
 * Primary file for NodeJS Master Class assignment 1
 *
 **/

// Dependencies
const httpServer = require('./http-server');
const rest = require('./rest-service');


// Define the handlers
const handlers = {};


//Hello handler
handlers.hello = new rest.Handler(['POST'], (data, callback) => {
    // Callback an http status code, and a payload object

    const response = {
        "message": "World!"
    };

    response.requestBody = rest.parse(data);
    callback(200, response);

});

// Not found handler
handlers.notFound = new rest.Handler([], (data, callback) => {
    callback(404);
});

// Define a request router
const router = {
    'hello': handlers.hello
};


// Start the server
httpServer.start((req, res) => new rest.RestService(router, handlers.notFound).respond(req, res));
