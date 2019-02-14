import React from "react";
import { Header, Title, Subtitle } from "./style";

export default class ErrorHandler extends React.Component {
  state = { errored: false };

  componentDidCatch(error, info) {
    this.setState({ errored: true });
    console.log(error, info);
  }

  render() {
    if (this.state.errored) {
      return (
        <Header>
          <Title>Opps</Title>
          <Subtitle>Please contact support</Subtitle>
        </Header>
      );
    }

    return this.props.children;
  }
}
