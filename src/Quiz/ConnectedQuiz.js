import { connect } from "react-redux";
import { changeAnswer, submitQuiz } from "../appState";
import { Quiz } from "./Quiz";

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

export const ConnectedQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
