import React from "react";
import {
  QuestionContainer,
  QuestionTitle,
  QuestionAnswer,
  TextField,
  ButtonContainer,
  Button
} from "../style";

export function ActiveQuestion({
  question,
  answer = "",
  buttonLabel,
  onChange,
  onSubmit
}) {
  function handleInputRef(inputEl) {
    if (inputEl) {
      inputEl.focus();
    }
  }

  return (
    <QuestionContainer active={true}>
      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <QuestionTitle>{question}</QuestionTitle>
        <TextField
          ref={handleInputRef}
          value={answer}
          onChange={e => {
            onChange(e.target.value);
          }}
        />
        <ButtonContainer>
          <Button type="submit" disabled={!answer}>
            {buttonLabel}
          </Button>
        </ButtonContainer>
      </form>
    </QuestionContainer>
  );
}

export function PastQuestion({ question, answer, onSelect }) {
  return (
    <QuestionContainer onClick={onSelect}>
      <QuestionTitle>{question}</QuestionTitle>
      {answer && <QuestionAnswer>{answer}</QuestionAnswer>}
    </QuestionContainer>
  );
}

export function FutureQuestion({ question, answer }) {
  return (
    <QuestionContainer future={true}>
      <QuestionTitle>{question}</QuestionTitle>
      {answer && <QuestionAnswer>{answer}</QuestionAnswer>}
    </QuestionContainer>
  );
}
