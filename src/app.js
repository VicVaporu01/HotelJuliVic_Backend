// This file is for the configuration of the server
import express from 'express';
import morgan from 'morgan';
import cabinRoutes from './routes/cabin.routes.js';

const app = express();

// SETTINGS
app.set('port', process.env.PORT || 3000);

// MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

// ROUTES
app.use('/api/cabin',cabinRoutes);

export default app;