import React from "react";
import { Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Quiz from "./Quiz";
import { history } from "./routerHistory";
import { appStateReducer } from "./appState";

const store = createStore(
  appStateReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path="/:index*" component={Quiz} />
      </Router>
    </Provider>
  );
}
