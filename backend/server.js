import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import portfolioRoutes from "./routes/portfolioRoutes.js";

dotenv.config();
connectDB();

const app = express();
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", userRoutes);
app.use("/api/portfolio", portfolioRoutes);

// Serve frontend (AFTER build)
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
