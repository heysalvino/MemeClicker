const express = require('express');
const path = require('path');
const morgan = require('morgan'); // Middleware for logging
const helmet = require('helmet'); // Middleware for securing HTTP headers

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.static('views'));
app.use(express.json()); // Parse JSON requests
app.use(morgan('dev')); // Log requests to the console
app.use(helmet()); // Add security headers

app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/', (req, res) => {
    res.render('index.html');
});

// Sample API endpoint
app.get('/api/sample', (req, res) => {
    const data = { message: 'This is a sample API endpoint.' };
    res.json(data);
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
