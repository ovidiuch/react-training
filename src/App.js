import React from "react";
import * as ReactRedux from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./router";
import { GlobalStyle } from "./style";
import { ActiveQuiz, CompletedQuiz } from "./Quiz";

export default function App({ store }) {
  return (
    <ReactRedux.Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/done" component={CompletedQuiz} />
          <Route path="/:index*" component={ActiveQuiz} />
        </Switch>
      </Router>
    </ReactRedux.Provider>
  );
}
