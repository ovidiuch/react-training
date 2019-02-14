import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                  onAnswerChange={handleAnswerChange}
                  onAnswerSubmit={handleAnswerSubmit}
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
