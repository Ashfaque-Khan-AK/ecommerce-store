import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js"

const router = express.Router();

router.post("/crreate-checkout-session", protectRoute, async (req, res) => {
    
})

export default router;