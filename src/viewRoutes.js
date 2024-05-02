const express = require('express');
const router = express.Router();
const ProductManager = require('./ProductManager');
const productManager = new ProductManager();

// Ruta para renderizar la vista home.handlebars con la lista de productos
router.get('/', (req, res) => {
    const products = productManager.getProducts();
    res.render('home', { products });
});

module.exports = router;
