import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import Quiz from "./Quiz";

const TEMPLATE = {
  title: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone nice?"]
};

function App() {
  const [answers, setAnswers] = useState({});

  return (
    <BrowserRouter>
      <Route
        path="/:index*"
        component={({ match, history }) => (
          <Quiz
            template={TEMPLATE}
            activeQuestionIndex={getIndexFromRouterParams(match.params)}
            selectQuestion={index => history.push(`/${index}`)}
            answers={answers}
            setAnswers={setAnswers}
          />
        )}
      />
    </BrowserRouter>
  );
}

function getIndexFromRouterParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}

ReactDOM.render(<App />, document.getElementById("root"));
