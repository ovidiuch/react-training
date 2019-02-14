import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Quiz from "./Quiz";

const QUIZ = {
  title: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

export default function App() {
  return (
    <BrowserRouter>
      <Route
        path="/:index*"
        component={({ history, match }) => (
          <Quiz
            template={QUIZ}
            activeQuestionIndex={getQuestionIndexFromRouteParams(match.params)}
            setActiveQuestionIndex={index => {
              history.push(`/${index}`);
            }}
          />
        )}
      />
    </BrowserRouter>
  );
}

function getQuestionIndexFromRouteParams({ index }) {
  return index !== undefined ? parseInt(index, 10) : 1;
}
