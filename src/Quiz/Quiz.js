import React, { useEffect } from "react";
import { ActiveQuestionList, CompletedQuestionList } from "./QuestionList";

export function Quiz({
  fetchingTemplate,
  template,
  activeQuestionIndex,
  answers,
  submittedQuiz,
  onFetchTemplate,
  onQuestionSelect,
  onAnswerChange,
  onQuizSubmit
}) {
  useEffect(() => onFetchTemplate(), []);

  if (fetchingTemplate) {
    return <div>Fetching template...</div>;
  }

  // TODO: Move to actions
  function handleAnswerSubmit() {
    const lastQuestion = activeQuestionIndex === template.questions.length - 1;
    if (lastQuestion) {
      onQuizSubmit();
    } else {
      onQuestionSelect(activeQuestionIndex + 1);
    }
  }

  return (
    <div>
      <h1>{template.name}</h1>
      {submittedQuiz ? (
        <CompletedQuestionList
          questions={template.questions}
          answers={answers}
        />
      ) : (
        <ActiveQuestionList
          questions={template.questions}
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
