"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
var express = require('express');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');
var app = express();
var port = process.env.PORT || 4000;
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Routes
app.get('/pets', function (req, res) {
    res.send('Hello World with TypeScript!');
});
// Start server
app.listen(port, function () {
    console.log("Server is running at http://localhost:".concat(port));
});
