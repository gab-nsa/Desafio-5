class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1; // Para manejar ids autoincrementables
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar datos
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            throw new Error("Todos los campos son obligatorios");
        }

        if (this.products.some(product => product.code === code)) {
            throw new Error("El código del producto ya existe");
        }

        // Agregar producto con id autoincrementable
        const product = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };
        this.products.push(product);

        return product; // Devolver el producto agregado
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            throw new Error("Producto no encontrado");
        }
        return product;
    }
}

module.exports = ProductManager;
