const express = require('express');
const router = express.Router();

// Mock database
let products = [];

// @route   GET /api/products
// @desc    Get all products
router.get('/', (req, res) => {
    res.json(products);
});

// @route   POST /api/products
// @desc    Create a product
router.post('/', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// @route   PUT /api/products/:id
// @desc    Update a product
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(p => p.id === id);
    if(index !== -1) {
        products[index] = req.body;
        res.json(products[index]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// @route   DELETE /api/products/:id
// @desc    Delete a product
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    products = products.filter(p => p.id !== id);
    res.status(204).send();
});

module.exports = router;