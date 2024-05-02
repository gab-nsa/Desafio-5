const express = require('express');
const ProductManager = require('./ProductManager');


const router = express.Router();
const productManager = new ProductManager();

// Obtener todos los productos
router.get('/', (req, res) => {
    const products = productManager.getProducts();
    res.json(products);
});

// Obtener un producto por su id
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    try {
        const product = productManager.getProductById(productId);
        res.json(product);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});

module.exports = router;
