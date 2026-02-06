import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE}/api/quizzes`)
      .then((res) => res.json())
      .then((data) => {
        setQuizzes(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load quizzes");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading quizzes...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Available Quizzes</h1>

      {quizzes.length === 0 && (
        <p>No quizzes available yet.</p>
      )}

      {quizzes.map((q) => (
        <div key={q._id} style={{ marginBottom: 10 }}>
          <Link to={`/quiz/${q._id}`}>{q.title}</Link>
        </div>
      ))}
    </div>
  );
}
