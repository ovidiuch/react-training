import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import * as ReactRedux from "react-redux";
import { ActiveQuiz, DoneQuiz } from "./Quiz";
import { GlobalStyle } from "./style";

export default function App({ store }) {
  return (
    <>
      <GlobalStyle />
      <ReactRedux.Provider store={store}>
        <MemoryRouter>
          <Switch>
            <Route path="/done" component={() => <DoneQuiz />} />
            <Route
              path="/:index*"
              component={({ match, history }) => (
                <ActiveQuiz
                  activeQuestionIndex={getIndexFromRouteParams(match.params)}
                  selectQuestion={index => history.push(`/${index}`)}
                  showDonePage={index => history.push(`/done`)}
                />
              )}
            />
          </Switch>
        </MemoryRouter>
      </ReactRedux.Provider>
    </>
  );
}

function getIndexFromRouteParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}
