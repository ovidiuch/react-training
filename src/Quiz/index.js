import React from "react";
import { ActiveQuestion, PastQuestion, FutureQuestion } from "./Question";

export default function Quiz({
  template,
  activeQuestionIndex,
  selectQuestion,
  answers,
  setAnswers
}) {
  const handleAnswerChange = (question, answer) => {
    setAnswers({ ...answers, [question]: answer });
  };

  const handleAnswerSubmit = () => {
    const isLastQuestion =
      activeQuestionIndex === template.questions.length - 1;

    if (isLastQuestion) {
      alert("Form submitted!");
    } else {
      selectQuestion(activeQuestionIndex + 1);
    }
  };

  return (
    <div>
      <h1>{template.title}</h1>
      <ul>
        {template.questions.map((question, index) => (
          <li key={index}>
            {index === activeQuestionIndex ? (
              <ActiveQuestion
                question={question}
                answer={answers[question]}
                onChange={handleAnswerChange}
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
