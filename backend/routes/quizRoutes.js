import express from "express";
import Quiz from "../models/Quiz.js";
import Result from "../models/Result.js";

const router = express.Router();

// Create a new quiz
router.post("/quizzes", async (req, res) => {
  const quiz = new Quiz(req.body);
  await quiz.save();
  res.json(quiz);
});

// Get all quizzes
router.get("/quizzes", async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// Get single quiz
router.get("/quizzes/:id", async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  res.json(quiz);
});

// Submit answers
router.post("/submit", async (req, res) => {
  const { studentName, quizId, answers } = req.body;

  const quiz = await Quiz.findById(quizId);

  let score = 0;

  quiz.questions.forEach((q, index) => {
    if (q.correctIndex === answers[index]) {
      score++;
    }
  });

  const result = new Result({
    studentName,
    quizId,
    score,
    total: quiz.questions.length,
  });

  await result.save();

  res.json(result);
});

// Get results
router.get("/results", async (req, res) => {
  const results = await Result.find();
  res.json(results);
});

export default router;
