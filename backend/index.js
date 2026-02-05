import quizRoutes from "./routes/quizRoutes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", quizRoutes);


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("Mongo Error:", err));

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "quiz-backend" });
});

const port = process.env.PORT || 8080;
app.listen(port, () =>
  console.log(`API running on http://localhost:${port}`)
);
