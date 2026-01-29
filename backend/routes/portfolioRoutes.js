import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, (req, res) => {
  res.json({
    name: "Diya",
    role: "Software Engineer",
    skills: ["React", "Node", "MongoDB"],
  });
});

export default router;
