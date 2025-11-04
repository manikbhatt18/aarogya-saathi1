import express from "express";
import { getMedicalNews } from "../controllers/newsControllers.js";

const router = express.Router();

// Route: GET /api/news
router.get("/", getMedicalNews);

export default router;
