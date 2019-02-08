import React from "react";
import { ActiveQuestionList, CompletedQuestionList } from "./QuestionList";

export function Quiz({
  quizTemplate,
  activeQuestionIndex,
  answers,
  submittedQuiz,
  onQuestionSelect,
  onAnswerChange,
  onQuizSubmit
}) {
  const { name, questions } = quizTemplate;

  function handleAnswerSubmit() {
    const lastQuestion = activeQuestionIndex === questions.length - 1;
    if (lastQuestion) {
      onQuizSubmit();
    } else {
      onQuestionSelect(activeQuestionIndex + 1);
    }
  }

  return (
    <div>
      <h1>{name}</h1>
      {submittedQuiz ? (
        <CompletedQuestionList questions={questions} answers={answers} />
      ) : (
        <ActiveQuestionList
          questions={questions}
          answers={answers}
          activeQuestionIndex={activeQuestionIndex}
          onAnswerChange={onAnswerChange}
          onAnswerSubmit={handleAnswerSubmit}
          onQuestionSelect={onQuestionSelect}
        />
      )}
    </div>
  );
}
