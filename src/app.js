const express = require('express');
const productRoutes = require('../src/productRoutes'); // Cambio en la ruta
const cartRoutes = require('../src/cartRoutes');

const app = express();

app.use(express.json());

// Rutas para productos y carritos
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
