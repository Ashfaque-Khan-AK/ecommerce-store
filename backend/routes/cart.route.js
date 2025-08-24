import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { 
    addToCart, 
    getCartProducts, 
    removeAllFromCart, 
    updateQuantity
 } from "../middleware/cart.controller.js";

const router = express.Router();

router.post("/", protectRoute, getCartProducts);
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllFromCart);
router.put("/:id", protectRoute, updateQuantity);


export default router; 