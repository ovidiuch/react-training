import React from "react";
import { Link } from "react-router-dom";
import { ActiveQuestion, PastQuestion, FutureQuestion } from "./Question";

export default function ActiveQuiz({
  template,
  activeQuestionIndex,
  selectQuestion,
  showDonePage,
  answers,
  onAnswerChange
}) {
  const handleAnswerSubmit = () => {
    const isLastQuestion =
      activeQuestionIndex === template.questions.length - 1;

    if (isLastQuestion) {
      showDonePage();
    } else {
      selectQuestion(activeQuestionIndex + 1);
    }
  };

  return (
    <div>
      <h1>
        <Link to="/">{template.title}</Link>
      </h1>
      <ul>
        {template.questions.map((question, index) => (
          <li key={index}>
            {index === activeQuestionIndex ? (
              <ActiveQuestion
                question={question}
                answer={answers[question]}
                onChange={onAnswerChange}
                onSubmit={handleAnswerSubmit}
              />
            ) : index < activeQuestionIndex ? (
              <PastQuestion question={question} answer={answers[question]} />
            ) : (
              <FutureQuestion question={question} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
