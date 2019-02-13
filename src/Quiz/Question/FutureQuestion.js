import React from "react";
import { QuestionContainer, QuestionTitle } from "../../style";

export default function FutureQuestion({ question }) {
  return (
    <QuestionContainer future={true}>
      <QuestionTitle>{question}</QuestionTitle>
    </QuestionContainer>
  );
}
