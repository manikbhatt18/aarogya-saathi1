import express from "express";
import { config } from "./src/config/appConfig.js";
import newsRoutes from "./src/routes/newsRoutes.js";

const app = express();

// Middleware
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
