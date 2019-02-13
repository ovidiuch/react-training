import React from "react";
import {
  QuestionTitle,
  QuestionContainer,
  TextField,
  Button,
  ButtonContainer
} from "../../style";

export default function ActiveQuestion({
  question,
  answer,
  onChange,
  onSubmit
}) {
  function handleFormRef(formEl) {
    if (formEl && formEl.scrollIntoView) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function handleInputRef(inputEl) {
    if (inputEl) {
      inputEl.focus();
    }
  }

  return (
    <QuestionContainer>
      <form
        ref={handleFormRef}
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <QuestionTitle>{question}</QuestionTitle>
        <TextField
          ref={handleInputRef}
          value={answer || ""}
          onChange={e => onChange(question, e.target.value)}
        />
        <ButtonContainer>
          <Button type="submit">Next</Button>
        </ButtonContainer>
      </form>
    </QuestionContainer>
  );
}
