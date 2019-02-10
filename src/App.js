import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { ActiveQuiz, CompletedQuiz } from "./Quiz";
import { history } from "./router";
import { appStateReducer } from "./state";
import { GlobalStyle } from "./style";

const store = createStore(
  appStateReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route path="/done" component={CompletedQuiz} />
          <Route path="/:index*" component={ActiveQuiz} />
        </Switch>
      </Router>
    </Provider>
  );
}
