// Main setup
const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// middleweare
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serving public folder files as resources
app.use(express.static('../public'))

// Error handling
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message
      }
    });
  });

// Exporting to server.js
module.exports = app;