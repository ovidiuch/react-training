import React from "react";
import * as ReactRedux from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import { history } from "./router";
import { GlobalStyle, Header, Title, Subtitle } from "./style";
import { ActiveQuiz, CompletedQuiz } from "./Quiz";

export function App({ store }) {
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

export default withErrorHandler(App);

function withErrorHandler(Component) {
  return class ErrorHandler extends React.Component {
    state = { errored: false };

    componentDidCatch(error, info) {
      this.setState({ errored: true });
      console.log(error, info);
    }

    render() {
      if (this.state.errored) {
        return (
          <>
            <GlobalStyle />
            <Header>
              <Title>Oops!</Title>
              <Subtitle>Something went wrong :(</Subtitle>
            </Header>
          </>
        );
      }

      return <Component {...this.props} />;
    }
  };
}
