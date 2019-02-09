import { connect } from "react-redux";
import { fetchTemplate, changeAnswer, submitAnswer } from "../appState";
import { Quiz } from "./Quiz";

function mapStateToProps({
  fetchingTemplate,
  template,
  answers,
  submittedQuiz
}) {
  return {
    fetchingTemplate,
    template,
    answers,
    submittedQuiz
  };
}

const mapDispatchToProps = {
  onFetchTemplate: fetchTemplate,
  onAnswerChange: changeAnswer,
  onAnswerSubmit: submitAnswer
};

export const ConnectedQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
