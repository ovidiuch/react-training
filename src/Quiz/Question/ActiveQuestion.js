import React from "react";
import {
  Button,
  ButtonContainer,
  QuestionContainer,
  QuestionTitle,
  TextField
} from "../../style";

export default function ActiveQuestion({
  question,
  answer = "",
  buttonLabel,
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
    <QuestionContainer active={true}>
      <form
        ref={handleFormRef}
        onSubmit={e => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <QuestionTitle>
          <label htmlFor="active-question">{question}</label>
        </QuestionTitle>
        <TextField
          id="active-question"
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
