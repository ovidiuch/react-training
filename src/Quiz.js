import React, { useState } from "react";
import { ActiveQuestion, FutureQuestion, PastQuestion } from "./Question";
import { retrieveAnswers, storeAnswers } from "./localPersist";

export default function Quiz({
  template,
  activeQuestionIndex,
  setActiveQuestionIndex
}) {
  const [answers, setAnswers] = useState(retrieveAnswers());

  const handleAnswerChange = (question, answer) => {
    const newAnswers = {
      ...answers,
      [question]: answer
    };
    setAnswers(newAnswers);
    storeAnswers(newAnswers);
  };

  const handleAnswerSubmit = () => {
    setActiveQuestionIndex(activeQuestionIndex + 1);
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
                onAnswerChange={handleAnswerChange}
                onAnswerSubmit={handleAnswerSubmit}
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
