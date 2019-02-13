import React from "react";
import { QuestionContainer, QuestionTitle, QuestionAnswer } from "../../style";

export default function PastQuestion({ question, answer, onSelect }) {
  return (
    <QuestionContainer onClick={onSelect}>
      <QuestionTitle>{question}</QuestionTitle>
      <QuestionAnswer>{answer}</QuestionAnswer>
    </QuestionContainer>
  );
}
