const express = require("express");
const helmet = require("helmet");
const xss = require("xss-clean");
const compression = require("compression");
const cors = require("cors");
const routes = require("./routes/v1");
const { errorHandler, pathNotFoundHandler, errorConverter } = require("./middlewares/error");

const app = express();

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options("*", cors());

// v1 api routes
app.use("/v1", routes);

// route middlewares
// send back a 404 error for any unknown api request
app.use(pathNotFoundHandler);

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
