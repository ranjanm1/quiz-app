import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizList from "./pages/QuizList";
import TakeQuiz from "./pages/TakeQuiz";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<QuizList />} />
        <Route path="/quiz/:id" element={<TakeQuiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
