import React, { createContext, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ActiveQuiz, DoneQuiz } from "./Quiz";
import { retrieveAnswers, storeAnswers } from "./localPersist";
import { GlobalStyle } from "./style";
import { AnswersContext } from "./answersContext";

const TEMPLATE = {
  title: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone nice?"]
};

function App() {
  const [answers, setAnswers] = useState(retrieveAnswers());
  const answersContextValue = {
    answers,
    onAnswerChange: (question, answer) => {
      const newAnswers = { ...answers, [question]: answer };
      setAnswers(newAnswers);
      storeAnswers(newAnswers);
    }
  };

  return (
    <>
      <GlobalStyle />
      <AnswersContext.Provider value={answersContextValue}>
        <BrowserRouter>
          <Switch>
            <Route
              path="/done"
              component={() => <DoneQuiz template={TEMPLATE} />}
            />
            <Route
              path="/:index*"
              component={({ match, history }) => (
                <ActiveQuiz
                  template={TEMPLATE}
                  activeQuestionIndex={getIndexFromRouterParams(match.params)}
                  selectQuestion={index => history.push(`/${index}`)}
                  showDonePage={index => history.push(`/done`)}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </AnswersContext.Provider>
    </>
  );
}

function getIndexFromRouterParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}

ReactDOM.render(<App />, document.getElementById("root"));
