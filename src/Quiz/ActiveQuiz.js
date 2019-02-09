import React from "react";
import { connect } from "react-redux";
import { selectQuestion, getIndexFromRouteParams } from "../router";
import { changeAnswer, submitAnswer } from "../actions";
import QuizLayout from "./QuizLayout";
import { ActiveQuestion, FutureQuestion, PastQuestion } from "./Question";

function ActiveQuiz({ match, answers, onAnswerChange, onAnswerSubmit }) {
  const activeQuestionIndex = getIndexFromRouteParams(match.params);

  return (
    <QuizLayout>
      {({ questions }) => (
        <ul>
          {questions.map((question, questionIndex) => (
            <li key={questionIndex}>
              {questionIndex === activeQuestionIndex ? (
                <ActiveQuestion
                  question={question}
                  answer={answers[question]}
                  buttonLabel={
                    activeQuestionIndex === questions.length - 1
                      ? "Submit"
                      : "Next"
                  }
                  onChange={answer => onAnswerChange(question, answer)}
                  onSubmit={() => onAnswerSubmit(activeQuestionIndex)}
                />
              ) : questionIndex < activeQuestionIndex ? (
                <PastQuestion
                  question={question}
                  answer={answers[question]}
                  onSelect={selectQuestion}
                />
              ) : (
                <FutureQuestion
                  question={question}
                  answer={answers[question]}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </QuizLayout>
  );
}

function mapStateToProps({ answers }) {
  return { answers };
}

const mapDispatchToProps = {
  onAnswerChange: changeAnswer,
  onAnswerSubmit: submitAnswer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveQuiz);
