import React from "react";
import * as ReactRedux from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { ActiveQuiz, DoneQuiz } from "./Quiz";
import { history } from "./router";
import { GlobalStyle } from "./style";
import ErrorHandler from "./ErrorHandler";
import { configureStore } from "./store";

const store = configureStore();

export default function App() {
  return (
    <ErrorHandler>
      <ReactRedux.Provider store={store}>
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

                const handleAnswerSubmit = template => {
                  if (activeQuestionIndex === template.questions.length) {
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
      </ReactRedux.Provider>
    </ErrorHandler>
  );
}

function getQuestionIndexFromRouteParams({ index }) {
  return index !== undefined ? parseInt(index, 10) : 1;
}
