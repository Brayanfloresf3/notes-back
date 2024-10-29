import "dotenv/config.js";
import "../../config/database.js";
import Product, { initializeProductData } from "../Product.js";


const initialProducts = [
    { id: 1, name: "Zapatillas Deportivas", category: "Zapatos", price: 59.99 },
    { id: 2, name: "Camiseta Básica", category: "Camisetas", price: 19.99 },
    { id: 3, name: "Gorra de Béisbol", category: "Accesorios", price: 14.99 },
    { id: 4, name: "Abrigo de Lana", category: "Abrigos", price: 89.99 },
    { id: 5, name: "Sandalias", category: "Zapatos", price: 29.99 },
    { id: 6, name: "Camiseta Gráfica", category: "Camisetas", price: 24.99 },
    { id: 7, name: "Bufanda", category: "Accesorios", price: 12.99 },
    { id: 8, name: "Chaqueta de Cuero", category: "Abrigos", price: 129.99 },
  ];

async function saveProducts(productsData) {
    try {
        const products = productsData.map(p => {
            const newProduct = initializeProductData(p);
            return newProduct;
        });
        await Product.insertMany(products);

        console.log('Productos insertadas con éxito.');
    } catch (error) {
        console.error('Error al insertar notes:', error);
    }
}


async function main() {
    try {
        await saveProducts(initialProducts);

    } catch (error) {
        console.error('Error en el flujo principal:', error);
        // Maneja el error según sea necesario
    }
}


main();