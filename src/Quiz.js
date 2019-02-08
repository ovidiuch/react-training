import React from "react";
import { ActiveQuestionList, CompletedQuestionList } from "./QuestionList";
import { connect } from "react-redux";
import { changeAnswer, submitQuiz } from "./appState";

const quizTemplate = {
  name: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

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

function mapStateToProps({ answers, submittedQuiz }) {
  return {
    answers,
    submittedQuiz
  };
}

const mapDispatchToProps = {
  onAnswerChange: changeAnswer,
  onQuizSubmit: submitQuiz
};

const ConnectedQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

function Quiz({
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

function getIndexFromRouteParams({ index }) {
  return index !== undefined ? Number(index) : 0;
}
