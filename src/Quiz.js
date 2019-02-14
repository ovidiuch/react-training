import React, { useState } from "react";
import { ActiveQuestion, FutureQuestion, PastQuestion } from "./Question";

export default function Quiz({ template }) {
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer
    });
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
