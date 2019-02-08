import { connect } from "react-redux";
import { changeAnswer, submitQuiz } from "../appState";
import { Quiz } from "./Quiz";

function mapStateToProps({ quizTemplate, answers, submittedQuiz }) {
  return {
    quizTemplate,
    answers,
    submittedQuiz
  };
}

const mapDispatchToProps = {
  onAnswerChange: changeAnswer,
  onQuizSubmit: submitQuiz
};

export const ConnectedQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
