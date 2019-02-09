import React from "react";
import { Router, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import Quiz from "./Quiz";
import { history } from "./router";
import { appStateReducer } from "./appState";

const store = createStore(
  appStateReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
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
