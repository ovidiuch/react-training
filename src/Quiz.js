import React, { useState } from "react";
import { ActiveQuestionList, CompletedQuestionList } from "./QuestionList";

const quizTemplate = {
  name: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

export function Quiz({ history, match, location }) {
  const { name, questions } = quizTemplate;
  const activeQuestionIndex = getIndexFromRouteParams(match.params);
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState(location.state || {});

  function handleAnswerChange(question, answer) {
    setAnswers({
      ...answers,
      [question]: answer
    });
  }

  function submitAnswer() {
    const lastQuestion = activeQuestionIndex === questions.length - 1;
    if (lastQuestion) {
      setSubmitted(true);
    } else {
      selectQuestion(activeQuestionIndex + 1);
    }
  }

  function selectQuestion(index) {
    history.push(`/${index}`, answers);
  }

  return (
    <div>
      <h1>{name}</h1>
      {submitted ? (
        <CompletedQuestionList questions={questions} answers={answers} />
      ) : (
        <ActiveQuestionList
          questions={questions}
          answers={answers}
          activeQuestionIndex={activeQuestionIndex}
          onAnswerChange={handleAnswerChange}
          onAnswerSubmit={submitAnswer}
          onQuestionSelect={selectQuestion}
        />
      )}
    </div>
  );
}

function getIndexFromRouteParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}
