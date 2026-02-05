import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
  question: String,
  options: [String],
  correctIndex: Number,
});

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [QuestionSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Quiz", QuizSchema);
