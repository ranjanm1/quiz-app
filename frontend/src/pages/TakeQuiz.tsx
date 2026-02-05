import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_BASE;

export default function TakeQuiz() {
  const { id } = useParams();
  const [quiz, setQuiz] = useState<any>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [name, setName] = useState("");
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    fetch(`${API_BASE}/api/quizzes/${id}`)
      .then(res => res.json())
      .then(data => {
        setQuiz(data);
        setAnswers(new Array(data.questions.length).fill(-1));
      });
  }, []);

  const submit = async () => {
    const res = await fetch(`${API_BASE}/api/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        studentName: name,
        quizId: id,
        answers
      })
    });

    const data = await res.json();
    setResult(data);
  };

  if (!quiz) return <p>Loading...</p>;

  return (
    <div>
      <h1>{quiz.title}</h1>

      <input
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      {quiz.questions.map((q: any, i: number) => (
        <div key={i}>
          <p>{q.question}</p>

          {q.options.map((opt: string, j: number) => (
            <div key={j}>
              <input
                type="radio"
                name={`q${i}`}
                onChange={() => {
                  const a = [...answers];
                  a[i] = j;
                  setAnswers(a);
                }}
              />
              {opt}
            </div>
          ))}
        </div>
      ))}

      <button onClick={submit}>Submit Quiz</button>

      {result && (
        <h2>
          Score: {result.score} / {result.total}
        </h2>
      )}
    </div>
  );
}
