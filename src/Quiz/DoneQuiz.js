import React from "react";
import { PastQuestion } from "./Question";
import QuizLayout from "./QuizLayout";

export default function DoneQuiz({ template, answers }) {
  return (
    <QuizLayout template={template}>
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
    </QuizLayout>
  );
}
