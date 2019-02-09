import React from "react";
import { getIndexFromRouteParams } from "../router";
import { ConnectedQuiz } from "./ConnectedQuiz";

export function QuizRoute({ match }) {
  return (
    <ConnectedQuiz
      activeQuestionIndex={getIndexFromRouteParams(match.params)}
    />
  );
}
