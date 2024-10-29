import { Router } from "express";
import { getProducts } from "../controllers/products/read.js";   


const router = Router();    
router.get("/all", getProducts);
export default router