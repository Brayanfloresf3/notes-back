import Product,{initializeProductData} from "../../models/Product.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({
            response: products,
        })
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createProduct = async (req, res) => {
    try {

        const product =  initializeProductData(req.body)
        const savedProduct = await product.save();

        // Responder con el producto creado
        return res.status(201).json({
            message: "Product created successfully",
            product: savedProduct
        });

    } catch (error) {
        return res.status(404).json({
            message: "Error creating product",
            error: error.message
        });
    }
}
