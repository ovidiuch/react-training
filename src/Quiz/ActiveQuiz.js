import React from "react";
import { ActiveQuestion, PastQuestion, FutureQuestion } from "./Question";
import QuizLayout from "./QuizLayout";
import { QuestionList } from "../style";

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
    <QuizLayout template={template}>
      <QuestionList>
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
              <PastQuestion
                question={question}
                answer={answers[question]}
                onSelect={() => selectQuestion(index)}
              />
            ) : (
              <FutureQuestion question={question} />
            )}
          </li>
        ))}
      </QuestionList>
    </QuizLayout>
  );
}
