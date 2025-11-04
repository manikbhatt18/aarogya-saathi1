import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import newsRoutes from "./src/routes/newsRoutes.js"; // adjust path if needed
import hospitalRoutes from "./src/routes/hospitalRoutes.js";

dotenv.config();

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/news", newsRoutes);
app.use("/api/hospitals", hospitalRoutes);

//Default route
app.get("/", (req, res) => {
  res.send("🩺 Aarogya Saathi Backend Running Successfully!");
});

//Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
