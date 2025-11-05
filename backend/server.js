import express from "express";
import "dotenv/config"
import { config } from "./src/config/appConfig.js";
import newsRoutes from "./src/routes/newsRoutes.js";
import hospitalRoutes from "./src/routes/hospitalRoutes.js";
import contactRoutes from "./src/routes/contactRoutes.js"
import cors from "cors"
import { connectDb } from "./src/config/db.js";
import { clerkMiddleware } from '@clerk/express';
import clerkWebhooks from "./src/controllers/clerkWebhooks.js";


const app = express();




connectDb();
// Middleware

console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "Loaded ✅" : "Missing ❌");
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

//Routes
app.use("/api/news", newsRoutes);
app.use("/api/hospitals", hospitalRoutes);
app.use("/api/contact", contactRoutes);

//Default route
app.get("/", (req, res) => {
  res.send("🩺 Aarogya Saathi Backend Running Successfully!");
});

//Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
