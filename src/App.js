import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";
import { QuizRoute } from "./Quiz";
import { appStateReducer } from "./appState";

const store = createStore(
  appStateReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/:index*" component={QuizRoute} />
      </BrowserRouter>
    </Provider>
  );
}
