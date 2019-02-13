import React from "react";
import { Link } from "react-router-dom";
import { Header, Content, Title, Subtitle } from "../style";

export default function QuizLayout({ children, template }) {
  return (
    <>
      <Header>
        <Title>
          <Link to="/">{template.title}</Link>
        </Title>
        <Subtitle>This is a quiz</Subtitle>
      </Header>
      <Content>{children}</Content>
    </>
  );
}
