import express from "express";
import "dotenv/config"
import { config } from "./src/config/appConfig.js";
import newsRoutes from "./src/routes/newsRoutes.js";
import cors from "cors"
import { connectDb } from "./src/config/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from "./src/controllers/clerkWebhooks.js";
const app = express();

connectDb();
// Middleware
app.use(express.json());
app.use(clerkMiddleware());
app.post("/api/clerk", express.raw({ type: 'application/json' }), clerkWebhooks);

// ✅ Enable CORS for frontend origin (Vite: http://localhost:5173)
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/news", newsRoutes);

// Root route
app.get("/", (req, res) => {
  res.send("Medical News API is running!");
});

// Start server
app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});
