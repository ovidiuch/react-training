import React, { useState } from "react";
import { Router, Switch, Route } from "react-router-dom";
import { ActiveQuiz, DoneQuiz } from "./Quiz";
import { retrieveAnswers, storeAnswers } from "./localPersist";
import { history } from "./router";
import { GlobalStyle } from "./style";
import { AppContext } from "./context";

const QUIZ = {
  title: "How was your day?",
  subtitle: "Please answer these questions",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

export default function App() {
  const [answers, setAnswers] = useState(retrieveAnswers());
  const appContextValue = {
    template: QUIZ,
    answers,
    setAnswers: (question, answer) => {
      const newAnswers = {
        ...answers,
        [question]: answer
      };
      setAnswers(newAnswers);
      storeAnswers(newAnswers);
    }
  };

  return (
    <AppContext.Provider value={appContextValue}>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/done" component={() => <DoneQuiz />} />
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
                  activeQuestionIndex={activeQuestionIndex}
                  setActiveQuestionIndex={index => {
                    history.push(`/${index}`);
                  }}
                  onAnswerSubmit={handleAnswerSubmit}
                />
              );
            }}
          />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

function getQuestionIndexFromRouteParams({ index }) {
  return index !== undefined ? parseInt(index, 10) : 1;
}
