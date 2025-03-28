import { Router } from "express";
const router = Router();
import { getRestaurantData } from "../controllers/restaurants.js";


//Get Restaurant Data:
router.get("/", getRestaurantData);

export default router;