import React from "react";

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
    <form
      ref={handleFormRef}
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <h2>{question}</h2>
      <input
        ref={handleInputRef}
        type="text"
        value={answer || ""}
        onChange={e => onChange(question, e.target.value)}
      />
      <button type="submit">Next</button>
    </form>
  );
}
