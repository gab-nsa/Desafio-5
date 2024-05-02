const fs = require('fs').promises;

class ProductManagerFileSystem {
    constructor(filePath) {
        this.filePath = filePath;
    }

    async addProduct(product) {
        // Leer productos existentes
        let products = [];
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            products = JSON.parse(data);
        } catch (error) {
            // Si el archivo no existe, no hacer nada
        }

        // Asignar un id autoincrementable
        product.id = products.length + 1;

        // Agregar el nuevo producto
        products.push(product);

        // Guardar los productos actualizados
        await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
    }

    async getProducts() {
        try {
            const data = await fs.readFile(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (error) {
            // Si el archivo no existe o está vacío, devolver un arreglo vacío
            return [];
        }
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find(product => product.id === id);
    }

    async updateProduct(id, updatedProduct) {
        const products = await this.getProducts();
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            // Actualizar el producto
            products[index] = { ...products[index], ...updatedProduct };
            // Guardar los productos actualizados
            await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
            return products[index];
        } else {
            throw new Error("Producto no encontrado");
        }
    }

    async deleteProduct(id) {
        let products = await this.getProducts();
        products = products.filter(product => product.id !== id);
        await fs.writeFile(this.filePath, JSON.stringify(products, null, 2));
    }
}

module.exports = ProductManagerFileSystem;
