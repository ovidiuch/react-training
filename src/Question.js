import React from "react";
import {
  QuestionContainer,
  QuestionTitle,
  TextField,
  Button,
  QuestionAnswer,
  ButtonContainer
} from "./style";

export function ActiveQuestion({
  question,
  answer = "",
  onAnswerChange,
  onAnswerSubmit
}) {
  return (
    <QuestionContainer active={true}>
      <form
        onSubmit={e => {
          e.preventDefault();
          onAnswerSubmit();
        }}
      >
        <QuestionTitle>
          <label htmlFor="active-question-textfield">{question}</label>
        </QuestionTitle>
        <TextField
          id="active-question-textfield"
          ref={handleInputEl}
          value={answer}
          onChange={e => {
            onAnswerChange(question, e.target.value);
          }}
        />
        <ButtonContainer>
          <Button type="submit" disabled={answer.length === 0}>
            Next
          </Button>
        </ButtonContainer>
      </form>
    </QuestionContainer>
  );
}

const handleInputEl = inputEl => {
  if (inputEl) {
    inputEl.focus();
  }
};

export function PastQuestion({ question, answer, onSelect }) {
  return (
    <QuestionContainer onClick={onSelect}>
      <QuestionTitle>{question}</QuestionTitle>
      <QuestionAnswer>{answer}</QuestionAnswer>
    </QuestionContainer>
  );
}

export function FutureQuestion({ question }) {
  return (
    <QuestionContainer future={true}>
      <QuestionTitle>{question}</QuestionTitle>
    </QuestionContainer>
  );
}
