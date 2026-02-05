import { useEffect, useState } from "react";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/quizzes`)
      .then(res => res.json())
      .then(data => setQuizzes(data));
  }, []);

  return (
    <div>
      <h1>Available Quizzes</h1>

      {quizzes.map((q: any) => (
        <div key={q._id} style={{ marginBottom: 10 }}>
          <a href={`/quiz/${q._id}`}>{q.title}</a>
        </div>
      ))}
    </div>
  );
}
