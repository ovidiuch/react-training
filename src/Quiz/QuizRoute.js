import React from "react";
import { ConnectedQuiz } from "./ConnectedQuiz";

export function QuizRoute({ history, match }) {
  const activeQuestionIndex = getIndexFromRouteParams(match.params);

  function handleQuestionSelect(questionIndex) {
    history.push(`/${questionIndex}`);
  }

  return (
    <ConnectedQuiz
      activeQuestionIndex={activeQuestionIndex}
      onQuestionSelect={handleQuestionSelect}
    />
  );
}

function getIndexFromRouteParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}
