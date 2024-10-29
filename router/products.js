import { Router } from "express";
import { getProducts, createProduct } from "../controllers/products/read.js";   


const router = Router();    
router.get("/all", getProducts);
router.post("/create", createProduct);
export default router