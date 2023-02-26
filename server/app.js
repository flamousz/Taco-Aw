if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const router = require("./routes");
const app = express();
const port = process.env.PORT || 3009;

const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});


/*

a Node.js application that creates a server using the Express.js framework. It imports several modules, sets up middleware functions, and defines a route handler.

The code first checks if the environment variable NODE_ENV is not set to "production". If it is not, it loads environment variables from a .env file using the dotenv module.

Next, the code imports the express module, as well as a custom middleware function called errorHandler and a router object from a separate routes.js module. It creates an Express application object and assigns it to the app variable. It also sets the port number for the server, either using the PORT environment variable or defaulting to 3009.

The cors middleware is then used to enable Cross-Origin Resource Sharing (CORS) for the server. This allows the server to handle requests from different domains.

app.use(express.urlencoded({ extended: true })); is a middleware function used in a Node.js application with Express.js framework. This middleware function is used to parse incoming request bodies in the URL-encoded format.

When a client sends a POST request to the server with a URL-encoded payload, the payload is sent in the request body in the format key=value. The express.urlencoded() middleware function parses the request body and makes the data available in the req.body object.

The extended option is set to true in this code, which allows parsing of the URL-encoded data with rich objects and arrays. If set to false, the URL-encoded data is parsed using the Node.js built-in querystring module.

For example, with extended set to true, a URL-encoded request body like this:

name=John&age=30&hobbies[0]=swimming&hobbies[1]=reading
will be parsed into an object like this:


{
    name: "John",
    age: "30",
    hobbies: [
        "swimming",
        "reading"
    ]
}
This middleware function should be used when expecting URL-encoded data in the request body, such as in HTML form submissions.

The router object is mounted on the root path of the application using app.use(). This sets up the route handler for incoming requests.

The errorHandler middleware is then mounted using app.use(). This middleware handles any errors that occur during the handling of incoming requests.

Finally, the server listens on the specified port, and a message is printed to the console indicating that the server is running.

*/

