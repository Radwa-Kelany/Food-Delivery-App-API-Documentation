// src/index.ts
const express = require('express');
const swaggerUi = require('swagger-ui-express');
import type { Request, Response } from 'express';
const swaggerDocument = require('../swagger.json');

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World with TypeScript!');
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});





