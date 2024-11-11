const express = require('express');
const dotenv = require('dotenv');
const indexRoutes = require('./routes');
const connectDatabase = require('./config/database');
const errorHandler = require("./middlewares/errorHandler");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', indexRoutes);

// Error Handling Middleware
app.use(errorHandler);

// Database Connection
connectDatabase();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
