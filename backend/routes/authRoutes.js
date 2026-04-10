const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Mock user storage
let users = [];

// User Registration
router.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }
    const userExists = users.find(user => user.username === username);
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const newUser = { username, password }; // In production, passwords should be hashed
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully' });
});

// User Login
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ username }, 'your_jwt_secret', { expiresIn: '1h' }); // Use a strong secret
    res.json({ token });
});

module.exports = router;