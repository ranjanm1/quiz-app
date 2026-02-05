import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "quiz-backend" });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API running on http://localhost:${port}`));