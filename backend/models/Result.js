import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  studentName: String,
  quizId: String,
  score: Number,
  total: Number,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Result", ResultSchema);
