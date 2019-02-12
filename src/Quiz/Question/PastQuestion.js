import React from "react";
import { QuestionAnswer, QuestionContainer, QuestionTitle } from "../../style";

export function PastQuestion({ question, answer, onSelect }) {
  return (
    <QuestionContainer onClick={onSelect}>
      <QuestionTitle>{question}</QuestionTitle>
      {answer && <QuestionAnswer>{answer}</QuestionAnswer>}
    </QuestionContainer>
  );
}
