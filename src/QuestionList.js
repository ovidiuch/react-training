import React from "react";
import { ActiveQuestion, FutureQuestion, PastQuestion } from "./Question";

export function ActiveQuestionList({
  questions,
  answers,
  activeQuestionIndex,
  onAnswerChange,
  onAnswerSubmit,
  onQuestionSelect
}) {
  return (
    <ul>
      {questions.map((question, questionIndex) => (
        <li key={questionIndex}>
          {questionIndex === activeQuestionIndex ? (
            <ActiveQuestion
              question={question}
              answer={answers[question]}
              buttonLabel={
                activeQuestionIndex === questions.length - 1 ? "Submit" : "Next"
              }
              onChange={answer => onAnswerChange(question, answer)}
              onSubmit={onAnswerSubmit}
            />
          ) : questionIndex < activeQuestionIndex ? (
            <PastQuestion
              question={question}
              answer={answers[question]}
              onSelect={() => onQuestionSelect(questionIndex)}
            />
          ) : (
            <FutureQuestion question={question} />
          )}
        </li>
      ))}
    </ul>
  );
}

export function CompletedQuestionList({ questions, answers }) {
  return (
    <ul>
      {questions.map((question, questionIndex) => (
        <li key={questionIndex}>
          <PastQuestion question={question} answer={answers[question]} />
        </li>
      ))}
    </ul>
  );
}
