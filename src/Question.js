import React from "react";

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
    <GreyForm
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2>{question}</h2>
      <input
        ref={handleInputRef}
        type="text"
        value={answer}
        onChange={e => {
          onChange(e.target.value);
        }}
      />
      <button type="submit" disabled={!answer}>
        {buttonLabel}
      </button>
    </GreyForm>
  );
}

function GreyForm({ children, ...formProps }) {
  return (
    <form {...formProps} style={{ background: "#e1e1e1", padding: 10 }}>
      {children}
    </form>
  );
}

export function PastQuestion({ question, answer, onSelect }) {
  return (
    <div onClick={onSelect}>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
}

export function FutureQuestion({ question, answer }) {
  return (
    <div style={{ opacity: 0.5 }}>
      <h2>{question}</h2>
    </div>
  );
}
