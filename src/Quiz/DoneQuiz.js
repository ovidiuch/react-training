import React from "react";
import { PastQuestion } from "./Question";

export default function DoneQuiz({ template, answers }) {
  return (
    <div>
      <h1>{template.title}</h1>
      <ul>
        {template.questions.map((question, index) => (
          <li key={index}>
            <PastQuestion question={question} answer={answers[question]} />
          </li>
        ))}
      </ul>
      <p>
        <strong>Thank you for your time!</strong>
      </p>
    </div>
  );
}
