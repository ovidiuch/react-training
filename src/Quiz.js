import React from "react";
import { ActiveQuestionList, CompletedQuestionList } from "./QuestionList";
import { connect } from "react-redux";
import { changeAnswer, submitQuiz } from "./appState";

const quizTemplate = {
  name: "How was your day?",
  questions: ["Was it sunny?", "Was the food good?", "Was everyone friendly?"]
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);

function Quiz({
  history,
  match,
  location,
  answers,
  submittedQuiz,
  onAnswerChange,
  onQuizSubmit
}) {
  const { name, questions } = quizTemplate;
  const activeQuestionIndex = getIndexFromRouteParams(match.params);

  function submitAnswer() {
    const lastQuestion = activeQuestionIndex === questions.length - 1;
    if (lastQuestion) {
      onQuizSubmit();
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
      {submittedQuiz ? (
        <CompletedQuestionList questions={questions} answers={answers} />
      ) : (
        <ActiveQuestionList
          questions={questions}
          answers={answers}
          activeQuestionIndex={activeQuestionIndex}
          onAnswerChange={onAnswerChange}
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
