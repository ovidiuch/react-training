import React, { useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { ActiveQuiz, DoneQuiz } from "./Quiz";
import { retrieveAnswers, storeAnswers } from "./localPersist";
import { history } from "./router";

const QUIZ = {
  title: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

export default function App() {
  const [answers, setAnswers] = useState(retrieveAnswers());

  const handleAnswerChange = (question, answer) => {
    const newAnswers = {
      ...answers,
      [question]: answer
    };
    setAnswers(newAnswers);
    storeAnswers(newAnswers);
  };

  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/done"
          component={() => <DoneQuiz template={QUIZ} answers={answers} />}
        />
        <Route
          path="/:index*"
          component={({ history, match }) => {
            const activeQuestionIndex = getQuestionIndexFromRouteParams(
              match.params
            );

            const handleAnswerSubmit = () => {
              if (activeQuestionIndex === QUIZ.questions.length) {
                history.push("/done");
              } else {
                history.push(`/${activeQuestionIndex + 1}`);
              }
            };

            return (
              <ActiveQuiz
                template={QUIZ}
                answers={answers}
                activeQuestionIndex={activeQuestionIndex}
                setActiveQuestionIndex={index => {
                  history.push(`/${index}`);
                }}
                onAnswerChange={handleAnswerChange}
                onAnswerSubmit={handleAnswerSubmit}
              />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

function getQuestionIndexFromRouteParams({ index }) {
  return index !== undefined ? parseInt(index, 10) : 1;
}
