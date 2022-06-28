const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require("cors");
const { connectDB } = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;
const app = express();

// Connect to MongoDB database
connectDB();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200 }));
app.use('/api/contacts', require('./routes/contactRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server started on Port: ${port}`);
});
