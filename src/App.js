import React from "react";
import * as ReactRedux from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { ActiveQuiz, DoneQuiz } from "./Quiz";
import { history } from "./router";
import { GlobalStyle } from "./style";
import ErrorHandler from "./ErrorHandler";
import { configureStore } from "./store";
import { getQuestionIndexFromRouteParams, selectQuestion } from "./router";

const store = configureStore();

export default function App() {
  return (
    <ErrorHandler>
      <ReactRedux.Provider store={store}>
        <GlobalStyle />
        <Router history={history}>
          <Switch>
            <Route path="/done" component={DoneQuiz} />
            <Route
              path="/:index*"
              component={({ history, match }) => {
                const activeQuestionIndex = getQuestionIndexFromRouteParams(
                  match.params
                );

                return (
                  <ActiveQuiz
                    activeQuestionIndex={activeQuestionIndex}
                    setActiveQuestionIndex={selectQuestion}
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
