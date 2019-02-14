import React from "react";
import { Link } from "react-router-dom";
import { ActiveQuestion, FutureQuestion, PastQuestion } from "./Question";

export function DoneQuiz({ template, answers }) {
  return (
    <div>
      <h1>
        <Link to="/">{template.title}</Link>
      </h1>
      <ul>
        {template.questions.map((question, index) => {
          return (
            <li key={index}>
              <PastQuestion question={question} answer={answers[question]} />
            </li>
          );
        })}
      </ul>
      <h2>Thank you for your time!</h2>
    </div>
  );
}

export function ActiveQuiz({
  template,
  answers,
  activeQuestionIndex,
  setActiveQuestionIndex,
  onAnswerChange,
  onAnswerSubmit
}) {
  return (
    <div>
      <h1>
        <Link to="/">{template.title}</Link>
      </h1>
      <ul>
        {template.questions.map((question, index) => {
          const humanIndex = index + 1;
          return (
            <li key={index}>
              {humanIndex === activeQuestionIndex ? (
                <ActiveQuestion
                  question={question}
                  answer={answers[question]}
                  onAnswerChange={onAnswerChange}
                  onAnswerSubmit={onAnswerSubmit}
                />
              ) : humanIndex < activeQuestionIndex ? (
                <PastQuestion
                  question={question}
                  answer={answers[question]}
                  onSelect={() => setActiveQuestionIndex(humanIndex)}
                />
              ) : (
                <FutureQuestion question={question} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
