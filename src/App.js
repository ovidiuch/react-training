import React from "react";
import * as ReactRedux from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./router";
import { GlobalStyle, Header, Title, Subtitle } from "./style";
import { ActiveQuiz, CompletedQuiz } from "./Quiz";

export default function App({ store }) {
  return (
    <ReactRedux.Provider store={store}>
      <GlobalStyle />
      <ErrorHandler>
        <Router history={history}>
          <Switch>
            <Route path="/done" component={CompletedQuiz} />
            <Route path="/:index*" component={ActiveQuiz} />
          </Switch>
        </Router>
      </ErrorHandler>
    </ReactRedux.Provider>
  );
}

class ErrorHandler extends React.Component {
  state = { errored: false };

  componentDidCatch(error, info) {
    this.setState({ errored: true });
    console.log(error, info);
  }

  render() {
    if (this.state.errored) {
      return (
        <Header>
          <Title>Oops!</Title>
          <Subtitle>Something went wrong :(</Subtitle>
        </Header>
      );
    }

    return this.props.children;
  }
}
