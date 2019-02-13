import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchTemplate } from "../actions";
import { Header, Content, Title, Subtitle } from "../style";

export default connect(
  null,
  { onTemplateFetch: fetchTemplate }
)(QuizLayout);

function QuizLayout({ children, template, onTemplateFetch }) {
  // Call onTemplateFetch once when this component mounts
  useEffect(() => {
    onTemplateFetch();
  }, []);

  if (!template) {
    return (
      <Header>
        <Title>Loading...</Title>
      </Header>
    );
  }

  return (
    <>
      <Header>
        <Title>
          <Link to="/">{template.title}</Link>
        </Title>
        <Subtitle>{template.subtitle}</Subtitle>
      </Header>
      <Content>{children}</Content>
    </>
  );
}
