import Product from "../../models/Product.js";

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
