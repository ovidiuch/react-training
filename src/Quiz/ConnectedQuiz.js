import { connect } from "react-redux";
import { fetchTemplate, changeAnswer, submitQuiz } from "../appState";
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
  onQuizSubmit: submitQuiz
};

export const ConnectedQuiz = connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
