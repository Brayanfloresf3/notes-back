import { Schema, model } from "mongoose";


const productSchema = new Schema({
    name: { 
        type: String, 
        required: true,
        maxlength: 100,
    },
    category: { 
        type: String, 
        required: true,
        maxlength: 50,
    },
    price: { 
        type: Number, 
        required: true,
        min: 0,
    }
}, {
    timestamps: true
});


productSchema.methods.initializeProduct = function(product) {
    this.name = product.name;
    this.category = product.category;
    this.price = product.price;
    return this;
};

export function initializeProductData(productData) {
    const product = new Product();
    product.initializeProduct(productData); 
    return product;
}


const Product = model('product', productSchema);
export default Product;

