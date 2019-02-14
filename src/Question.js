import React from "react";

export function ActiveQuestion({
  question,
  answer,
  onAnswerChange,
  onAnswerSubmit
}) {
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onAnswerSubmit();
      }}
    >
      <h4>{question}</h4>
      <input
        ref={handleInputEl}
        type="text"
        value={answer || ""}
        onChange={e => {
          onAnswerChange(question, e.target.value);
        }}
      />
      <button type="submit">Next</button>
    </form>
  );
}

const handleInputEl = inputEl => {
  if (inputEl) {
    inputEl.focus();
  }
};

export function PastQuestion({ question, answer }) {
  return (
    <div>
      <h4>{question}</h4>
      <p>{answer}</p>
    </div>
  );
}

export function FutureQuestion({ question }) {
  return <h4 style={{ opacity: 0.5 }}>{question}</h4>;
}
