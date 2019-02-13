import React from "react";

export default function PastQuestion({ question, answer }) {
  return (
    <div>
      <h2>{question}</h2>
      <p>{answer}</p>
    </div>
  );
}
