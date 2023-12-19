import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { QuizProvider } from "../Context/QuizContext";
import QuizContainer from "../Pages/Quiz";
import ScoreComponent from "../Pages/Score";

function AppRoutes() {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path="/question/:id" element={<QuizContainer />} />
          <Route path="/score" element={<ScoreComponent />} />
          <Route path="/" element={<Navigate replace to="/question/1" />} />
        </Routes>
      </QuizProvider>
    </Router>
  );
}

export default AppRoutes;
