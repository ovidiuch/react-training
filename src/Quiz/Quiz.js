import React, { useEffect } from "react";
import { selectQuestion } from "../router";
import { ActiveQuestionList, CompletedQuestionList } from "./QuestionList";

export function Quiz({
  activeQuestionIndex,
  fetchingTemplate,
  template,
  answers,
  submittedQuiz,
  onFetchTemplate,
  onAnswerChange,
  onAnswerSubmit
}) {
  useEffect(() => onFetchTemplate(), []);

  if (fetchingTemplate) {
    return <div>Fetching template...</div>;
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
          onAnswerSubmit={() => onAnswerSubmit(activeQuestionIndex)}
          onQuestionSelect={selectQuestion}
        />
      )}
    </div>
  );
}
