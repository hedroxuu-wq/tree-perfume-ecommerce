const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware configuration
app.use(cors());
app.use(bodyParser.json());  // Parse JSON request bodies

// Database connection
const dbURI = 'YOUR_DATABASE_URI'; // replace with your database uri
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected.'))
  .catch(err => console.error('MongoDB connection error:', err));

// Route handlers
app.get('/', (req, res) => {
    res.send('Welcome to the Perfume E-commerce API!');
});

// Additional routes can be added here

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});