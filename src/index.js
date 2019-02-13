import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { ActiveQuiz, DoneQuiz } from "./Quiz";
import { GlobalStyle } from "./style";
import { configureStore } from "./store";

const store = configureStore();

function App() {
  return (
    <>
      <GlobalStyle />
      <ReactRedux.Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/done" component={() => <DoneQuiz />} />
            <Route
              path="/:index*"
              component={({ match, history }) => (
                <ActiveQuiz
                  activeQuestionIndex={getIndexFromRouterParams(match.params)}
                  selectQuestion={index => history.push(`/${index}`)}
                  showDonePage={index => history.push(`/done`)}
                />
              )}
            />
          </Switch>
        </BrowserRouter>
      </ReactRedux.Provider>
    </>
  );
}

function getIndexFromRouterParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}

ReactDOM.render(<App />, document.getElementById("root"));
